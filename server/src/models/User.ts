import { model, Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: String,
        email: {
            type: String,
            required: true,
            unique: true,
        },
        passwordHash: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },
    },
    { timestamps: true }
);

export const User = model("User", userSchema)
