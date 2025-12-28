import React, { useState } from "react";

import { useMutation } from "@tanstack/react-query";

import { useAppDispatch } from "../hooks/useAppDispatch";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../lib/api";
import { setCredentials } from "../store/slices/authSlice";
import { Alert, Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import type { AxiosError } from "axios";

export const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: authAPI.login,
        onSuccess: (data) => {
            dispatch(setCredentials({ token: data.token, user: data.user }));
            navigate('/');
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        mutation.mutate({ email: email.toLowerCase().trim(), password });
    };

    return (
        <Container component="main" maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto" }}>
                <Typography component="h1" variant="h4" align="center" gutterBottom>
                    Movie App Login
                </Typography>
            </Paper>

            {mutation.isError && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {((mutation.error as AxiosError)?.response?.data as {message: string})?.message || "Login failed"}
                </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={mutation.isError as boolean}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="password"
                    name="password"
                    autoComplete="current-password"
                    autoFocus
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={mutation.isError as boolean}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={mutation.isPending}
                >
                    { mutation.isPending ? "Signing In..." : "Sign In" }
                </Button>
            </Box>
            <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
                Don't have an account? <Link to="/register" style={{ color: '#1976d2', textDecoration: "none" }}>register</Link> instead.
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
                <strong>Demo Admin:</strong> admin@movieapp.com / Admin123!
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
                <strong>Demo User:</strong> alex@gmail.com / Alex123$
            </Typography>
        </Container>
    );
}
