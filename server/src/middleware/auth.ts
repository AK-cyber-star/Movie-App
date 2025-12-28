import express, { NextFunction, Response } from "express"
import jwt from "jsonwebtoken";
import { jwtPayloadSchema, TJwtPayload } from "../schemas/auth"
import env from "../config/env.config";
import { z } from "zod";

export interface AuthRequest extends express.Request {
    user?: TJwtPayload;
}

export function authenticate(req: AuthRequest, res: Response, next: NextFunction) {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ message: "No token" });

    const token = header.split(" ")[1];
    try {
        const payload = jwt.verify(token, env.JWT_SECRET);
        const validatePayload = jwtPayloadSchema.parse(payload);
        req.user = validatePayload;
        next();
    } catch (err) {
        if (err instanceof z.ZodError) {
            return res.status(403).json({
                message: "Invalid token format",
                errors: err.issues.map((issue) => issue.message)
            });
        }
        return res.status(401).json({ message: "Invalid token" });
    }
}

export function requireRole(
    req: AuthRequest,
    res: Response,
    next: NextFunction
) {
    if (!req.user || req.user.role !== "admin") {
        return res.status(401).json({ message: "Unauthenticated" });
    }
    next();
}
