import { useState, useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import {
  Box, TextField, Button, CardMedia, Alert, CircularProgress,
  Grid

} from '@mui/material';
import { moviesAPI } from '../../lib/api';
import type { TMovie } from '../../types/api.types';
import { setSelectedMovie } from '../../store/slices/movieSlice';
import { Add } from '@mui/icons-material';
import { movieSchema } from '../../schemas/form.schema';
import type { AxiosError } from 'axios';
import { ValidationError } from 'yup';
import { useAppDispatch } from '../../hooks/useAppDispatch';

interface MovieFormData {
  title: string;
  description: string;
  year: number;
  releaseDate: string;
  duration: number;
  rating: number;
  posterUrl: string;
  imdbId: string;
}

export const MovieForm: React.FC<{ movie?: TMovie; onClose?: () => void }> = ({ movie, onClose }) => {
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<MovieFormData>(
    movie ? {
      title: movie.title,
      description: movie.description || '',
      year: movie.year,
      releaseDate: movie.releaseDate,
      duration: movie.duration,
      rating: movie.rating,
      posterUrl: movie.posterUrl || '',
      imdbId: movie.imdbId || '',
    } : {
      title: '',
      description: '',
      year: new Date().getFullYear(),
      releaseDate: '', 
      duration: 120,
      rating: 0,
      posterUrl: '',
      imdbId: '',
    }
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState('');

  const isEdit = !!movie;

  const mutation = useMutation({
    mutationFn: async (data: MovieFormData) => (
        isEdit
        ? await moviesAPI.update(movie!._id, data)
        : await moviesAPI.create(data)
    ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['movies'] });
      queryClient.invalidateQueries({ queryKey: ['movies', { page: 1 }] });
      dispatch(setSelectedMovie(data));
      setErrors({});
      setSubmitError('');
      setFormData({
        title: '',
        description: '',
        year: new Date().getFullYear(),
        releaseDate: '',
        duration: 120,
        rating: 0,
        posterUrl: '',
        imdbId: '',
      });
      if (onClose) onClose();
    },
    onError: (error: AxiosError<{message: string}>) => {
      setSubmitError(error.response?.data?.message || `Failed to ${isEdit ? 'update' : 'create'} movie`);
    },
  });

  const validateForm = useCallback(async (): Promise<boolean> => {
    try {
      await movieSchema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof ValidationError) {
        console.log("validation failed:", error)
        const newErrors: Record<string, string> = {};
        error.inner.forEach((err: ValidationError) => {
          if (err.path) {
            newErrors[err.path] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  }, [formData]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (await validateForm()) {
      mutation.mutate(formData);
    }
  }, [formData, validateForm, mutation]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'year' || name === 'duration' || name === 'rating'
        ? Number(value) || 0
        : value
    }));
    if (errors[name as keyof MovieFormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto' }}>
      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setSubmitError('')}>
          {submitError}
        </Alert>
      )}

      <Grid container spacing={3}>
        <Grid>
          <TextField
            fullWidth
            label="Movie Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            error={!!errors.title}
            helperText={errors.title}
            required
          />
        </Grid>

        <Grid>
          <TextField
            fullWidth
            label="year"
            name="year"
            type="number"
            value={formData.year}
            onChange={handleChange}
            error={!!errors.year}
            helperText={errors.year}
            required
          />
        </Grid>

        <Grid>
          <TextField
            fullWidth
            label="Release Date"
            placeholder='YYYY-DD-MM'
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
            error={!!errors.releaseDate}
            helperText={errors.releaseDate}
            required
          />
        </Grid>

        <Grid>
          <TextField
            fullWidth
            label="Duration (minutes)"
            name="duration"
            type="number"
            value={formData.duration}
            onChange={handleChange}
            error={!!errors.duration}
            helperText={errors.duration}
            required
          />
        </Grid>

        <Grid>
          <TextField
            fullWidth
            label="IMDB Rating (0-10)"
            name="rating"
            type="number"
            value={formData.rating}
            onChange={handleChange}
            error={!!errors.rating}
            helperText={errors.rating}
            required
          />
        </Grid>

        <Grid>
          <TextField
            fullWidth
            label="IMDB ID"
            name="imdbId"
            value={formData.imdbId}
            onChange={handleChange}
            error={!!errors.imdbId}
            helperText={errors.imdbId || "e.g., tt0111161"}
            placeholder="tt0111161"
          />
        </Grid>

        <Grid>
          <TextField
            fullWidth
            label="Poster URL"
            name="posterUrl"
            value={formData.posterUrl}
            onChange={handleChange}
            error={!!errors.posterUrl}
            helperText={errors.posterUrl || "Image URL (e.g., https://image.tmdb.org/...)"}
            required
          />
        </Grid>

        <Grid>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            error={!!errors.description}
            helperText={errors.description}
            required
          />
        </Grid>

        {formData.posterUrl && (
          <Grid>
            <CardMedia
              component="img"
              image={formData.posterUrl}
              alt={formData.title}
              sx={{
                height: 300,
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 3,
                width: '100%'
              }}
            />
          </Grid>
        )}
      </Grid>

      <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
        <Button
          variant="outlined"
          onClick={onClose || (() => {})}
          disabled={mutation.isPending}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          startIcon={mutation.isPending ? <CircularProgress size={20} /> : <Add />}
          disabled={mutation.isPending}
        >
          {mutation.isPending ?
            (isEdit ? 'Updating...' : 'Adding...') :
            (isEdit ? 'Update Movie' : 'Add Movie')
          }
        </Button>
      </Box>
    </Box>
  );
};

