import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  Container,
  Grid,
  Pagination,
  Box,
  Typography,
  CircularProgress,
  Alert,
} from '@mui/material';
import { moviesAPI } from '../lib/api';
import { MovieCard } from '../components/MovieCard';
import type { TMovie } from '../types/api.types';
import { useMovies } from '../hooks/useMovies';
import { useAppDispatch } from '../hooks/useAppDispatch';

import { setPage, type PaginationData } from '../store/slices/movieSlice';

export const HomePage: React.FC = () => {

    const dispatch = useAppDispatch();
    const { currentPage, limit } = useMovies();

  const {
    data,
    isLoading,
    isFetching,
    error: queryError
  } = useQuery<PaginationData>({
    queryKey: ['movies', currentPage, limit],
    queryFn: () => moviesAPI.getAll(currentPage, limit),
    staleTime: 5 * 60 * 1000,
  });

  const handlePageChange = useCallback((_: React.ChangeEvent<unknown>, value: number) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(setPage(value));
  }, [dispatch]);

  if (isLoading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <CircularProgress />
        <Typography variant="body1" sx={{ mt: 2 }}>Loading movies...</Typography>
      </Container>
    );
  }

  if (queryError || !data) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Alert severity="error">
          Failed to load movies. Check console for details.
        </Alert>
        <Typography variant="body2" color="error" sx={{ mt: 1 }}>
          {String(queryError || "No data available")}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          🎬 Top Movies - Page {currentPage}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {data?.pagination?.total || 0} movies available
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ justifyContent: "center" }}>
        {data?.items?.map((movie: TMovie) => (
          <Grid key={movie._id}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>

      {isFetching && (
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <CircularProgress size={24} />
          <Typography variant="body2" sx={{ ml: 1 }}>Loading page {currentPage}...</Typography>
        </Box>
      )}

      {/* Empty state */}
      {data?.items?.length === 0 && !isFetching && (
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            No movies found on page {currentPage}
          </Typography>
        </Box>
      )}

      {/* Pagination */}
      {data?.pagination?.pages && data.pagination.pages > 1 && (
        <Box sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={data.pagination.pages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
          />
        </Box>
      )}

    </Container>
  );
};

