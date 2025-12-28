import type React from "react";
import { useAuth } from "../hooks/useAuth";

import { Navigate, Outlet} from "react-router-dom";

interface ProtectedRouteProps {
    adminOnly?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ adminOnly = false }) => {
    const { token, isAdmin, isLoading } = useAuth();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!token) {
        return <Navigate to="login" replace/>
    }
    if (adminOnly && !isAdmin) {
        return <Navigate to="/" replace />
    }

    return <Outlet />;
}
