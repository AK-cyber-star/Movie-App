export interface TMovie {
    _id: string;
    title: string;
    description: string;
    year: number;
    releaseDate: string;
    duration: number;
    rating: number;
    posterUrl: string;
    imdbId: string;
    createdAt: string;
    updatedAt: string;
}

export interface TUser {
    _id: string;
    name: string;
    email: string;
    role: "user" | "admin";
    createdAt: string;
    updatedAt: string;
}

export interface TApiResponse<T> {
    data?: T;
    message?: string;
}
