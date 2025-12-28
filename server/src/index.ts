import express, { Application, NextFunction, Request, Response } from "express";

// Routes
import authRoutes from "./routes/auth"
import moviesRoutes from "./routes/movies";

 import { Movie } from "./models/Movie";

import env from "./config/env.config";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import compression from "compression";
import { AuthRequest } from "./middleware/auth";


 const app: Application = express();
 const PORT = env.PORT;

 // DB
 mongoose.connect(env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected!");
        Movie.collection.createIndex({ title: "text", description: "text" });
    })
    .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan("combined"));
app.use(compression());
app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
}));
app.use(express.json( { limit: "10mb" } ));
app.use(express.urlencoded({ extended: true }));

app.get("/health", (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK",
        timestamp: new Date().toISOString(),
        mongodb: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/movies", moviesRoutes);

// Global Error Handler
app.use((err: any, req: AuthRequest, res: Response, next: NextFunction) => {
    console.error("Error: ", err);
    const status = err.status || 500;
    const message = env.NODE_ENV === "production"
        ? "Internal Server Error"
        : err.message || "Something went wrong"
    res.status(status).json({
        message,
        ...(env.NODE_ENV === "development" && { stack: err.stack })
    });
});

// Graceful Shutdown
process.on("SIGTERM", async() => {
    console.log("SIGTERM received, closing server...");
    await mongoose.connection.close();
    process.exit(0);
});

process.on("SIGINT", async() => {
    console.log("SIGINT received, closing server");
    await mongoose.connection.close();
    process.exit(0);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
