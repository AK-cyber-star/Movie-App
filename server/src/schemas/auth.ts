import { z } from "zod";

export const registerSchema = z.object({
    name: z.string("Name is required")
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name too long")
        .trim(),
    email: z.string("Email is required")
        .email("Invalid email format")
        .toLowerCase()
        .transform((val) => val.trim()),
    password: z.string("Password is required")
        .min(8, "Password must be 8+ characters")
        .regex(/[A-Z]/, "Password needs uppercase")
        .regex(/[0-9]/, "Password needs number")
        .regex(/[^A-Za-z0-9]/, "Password needs special character"),
});

export const loginSchema = z.object({
    email: z.string("Email is required").email("Invalid email"),
    password: z.string("Password is required").min(1),
});

export const jwtPayloadSchema = z.object({
    sub: z.string("Subsciber required"),
    role: z.enum(["user", "admin"]),
    iat: z.number("Iat required").optional(),
    exp: z.number("Exp required").optional(),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>
export type TJwtPayload = z.infer<typeof jwtPayloadSchema>;
