import type { TMovie } from "../../types/api.types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface PaginationData {
    items: TMovie[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        pages: number;
    }
};

interface MoviesState {
    currentPage: number;
    limit: number;
    searchQuery: string | null;
    selectedMovie: TMovie | null;
};

const initialState: MoviesState = {
    currentPage: 1,
    limit: 20,
    searchQuery: null,
    selectedMovie: null,
};

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string | null>) => {
            state.searchQuery = action.payload;
        },
        setSelectedMovie: (state, action: PayloadAction<TMovie | null>) => {
            state.selectedMovie = action.payload;
        },
        clearMovies: (state) => {
            state.currentPage = 1;
            state.searchQuery = null;
            state.selectedMovie = null;
        },
    }
});

export const { setPage, setSearchQuery, setSelectedMovie, clearMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
