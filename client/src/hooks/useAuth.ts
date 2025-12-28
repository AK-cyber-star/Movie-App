import { useAppSelector } from "./useAppSelector";

export const useAuth = () => {
    const user = useAppSelector((state) => state.auth.user);
    const token = useAppSelector((state) => state.auth.token);
    const isLoading  = useAppSelector((state) => state.auth.isLoading);
    const isAdmin = user?.role === "admin";

    return { user, token, isLoading, isAdmin };
}
