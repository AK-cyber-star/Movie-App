import React from "react";
import { useMutation } from "@tanstack/react-query";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import { authAPI } from "../lib/api";
import { setCredentials } from "../store/slices/authSlice";
import { registerSchema } from "../schemas/form.schema";
import { Alert, Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import type { AxiosError } from "axios";

export const RegisterPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: registerSchema,
        validateOnMount: true,
        onSubmit: (values) => {
            mutation.mutate({ 
                name: values.name.trim(), 
                email: values.email.toLowerCase().trim(), 
                password: values.password 
            });
        }
    });

    const mutation = useMutation({
        mutationFn: authAPI.register,
        onSuccess: (data) => {
            dispatch(setCredentials({ token: data.token, user: data.user }));
            navigate('/');
        }
    });

    return (
        <Container component="main" maxWidth="sm" sx={{ mt: 8, mb: 4 }}>
            <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto" }}>
                <Typography component="h1" variant="h4" align="center" gutterBottom>
                    Movie App Register
                </Typography>
            </Paper>

            {/* Formik validation errors */}
            {formik.errors.name && formik.touched.name && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {formik.errors.name}
                </Alert>
            )}
            {formik.errors.email && formik.touched.email && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {formik.errors.email}
                </Alert>
            )}
            {formik.errors.password && formik.touched.password && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {formik.errors.password}
                </Alert>
            )}

            {/* API mutation error */}
            {mutation.isError && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {((mutation.error as AxiosError)?.response?.data as {message: string})?.message || "Registration failed"}
                </Alert>
            )}

            <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="new-password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    disabled={mutation.isPending || !formik.isValid}
                >
                    { mutation.isPending ? "Creating Account..." : "Create Account" }
                </Button>
            </Box>
            <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
                Already have an account? <Link to="/login" style={{ color: '#1976d2', textDecoration: 'none' }}>Sign in</Link>
            </Typography>
        </Container>
    );
}
