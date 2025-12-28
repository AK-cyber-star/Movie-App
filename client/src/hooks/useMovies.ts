import { useAppSelector } from "./useAppSelector";

export const useMovies = () => {
    const currentPage = useAppSelector((state) => state.movies.currentPage);
    const limit  = useAppSelector((state) => state.movies.limit);

    return { currentPage, limit };
}
