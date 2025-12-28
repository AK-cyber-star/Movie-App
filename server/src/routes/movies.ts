import express, { Request, Response, NextFunction } from "express";
import { Movie } from "../models/Movie";
import { authenticate, AuthRequest, requireRole } from "../middleware/auth";

const router = express.Router();

// Movies with pagination
// GET /movies?page=1&limit=20
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const skip = (page - 1) * limit;

        const [items, total] = await Promise.all([
            Movie.find().skip(skip).limit(limit),
            Movie.countDocuments(),
        ]);

        res.json({
            items,
            pagination: { page, limit, total, pages: Math.ceil(total / limit)}
        });
    } catch (err) {
        next(err);
    }
});

// Movies in sorted list
// GET /movies/sorted?by=rating&order=desc
router.get("/sorted", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const by = req.query.by as keyof typeof sortedFieldMap; // can be - title, rating, releaseDate
        const order = req.query.order === "asc" ? 1 : -1;
        const sortedFieldMap: { [key: string]: string } = {
            name: "title",
            rating: "rating",
            releaseDate: "releaseDate",
            duration: "duration",
        };

        const sortField = sortedFieldMap[by] || "title";

        const movies = await Movie.find().sort({ [sortField]: order});
        res.json(movies);
    } catch(err) {
        next(err);
    }
});

// Movies, search by name/description
// GET /movies/search?q=something
router.get("/search", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const q = (req.query.q as string) || "";
        if (!q.trim()) return res.json([]);

        const movies = await Movie.find(
            { $text: { $search: q } },
            { score: { $meta: "textScore" } }
        ).sort({ score: { $meta: "textScore" } });

        res.json(movies);
    } catch (err) {
        next(err);
    }
});

// create
router.post(
    "/",
    authenticate,
    requireRole,
    async (req: AuthRequest, res: Response, next: NextFunction) => {
        const { releaseDate } = req.body;
        const formateDate = new Date(releaseDate);
        req.body.releaseDate = formateDate;
        try {
            const movie  = await Movie.create(req.body);
            res.status(201).json(movie);
        } catch (err) {
            next(err);
        }
    }
);

// update
router.put(
    "/:id",
    authenticate,
    requireRole,
    async (req: AuthRequest, res: Response, next: NextFunction) => {
        try {
            const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });
            if (!movie) return res.status(404).json({ message: "Not found" });
            res.json(movie);
        } catch (err) {
            next(err);
        }
    }
);

// delete
router.delete(
    "/:id",
    authenticate,
    requireRole,
    async (req: AuthRequest, res: Response, next: NextFunction) => {
        try {
            const movie = await Movie.findByIdAndDelete(req.params.id);
            if (!movie) return res.status(404).json({ message: "Not found" });

            res.status(204).send();
        } catch (err) {
            next(err);
        }
    }
);

export default router;
