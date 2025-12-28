import { model, Schema } from "mongoose";

const movieSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            index: true,
        },
        description: {
            type: String,
            required: true,
            index: "text",
        },
        year: Number,
        releaseDate: Date,
        duration: Number,
        rating: Number,
        posterUrl: String,
        imdbId: String,
    },
    { timestamps: true }
);

movieSchema.index({ title: "text", description: "text"});

export const Movie = model("movie", movieSchema);
