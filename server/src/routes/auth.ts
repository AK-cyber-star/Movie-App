import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../models/User";
import { LoginInput, loginSchema, RegisterInput, registerSchema } from "../schemas/auth";
import z from "zod";
import env from "../config/env.config";

const router = express.Router();

router.post("/register", async (req, res, next) => {
    try {
        const {name, email, password}: RegisterInput = registerSchema.parse(req.body);
        const passwordHash = await bcrypt.hash(password, 10);
        const user  = await User.create({ name, email, passwordHash });
        res.status(201).json({ id: user._id });

    } catch (err) {
        if (err instanceof z.ZodError) {
            return res.status(400).json({
                message: "Validation failed",
                errors: err.issues.map((issue) => issue.message)
            })
        }
        next(err);
    }
});

router.post("/login", async (req, res, next) => {
    try {
        const { email, password }: LoginInput = loginSchema.parse(req.body);
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: "Invalid credentials" });

        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign(
            { sub: user._id, role: user.role },
            env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        loginSchema
        res.json({ token, user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        }});
    } catch (err) {
        if (err instanceof z.ZodError) {
            return res.status(400).json({
                message: "Validation failed",
                errors: err.issues.map((issue) => issue.message)
            });
        }
        next(err);
    }
});

export default router;
