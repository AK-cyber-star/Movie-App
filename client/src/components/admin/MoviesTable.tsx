import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  IconButton, Alert, Pagination, Box, Typography
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { moviesAPI } from '../../lib/api';
import type { TMovie } from '../../types/api.types';

export const MoviesTable: React.FC = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const limit = 10;

  const { data, isLoading, error } = useQuery({
    queryKey: ['adminMovies', page, limit],
    queryFn: () => moviesAPI.getAll(page, limit),
  });

  const deleteMutation = useMutation({
    mutationFn: (movieId: string) => moviesAPI.delete(movieId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminMovies'] });
      queryClient.invalidateQueries({ queryKey: ['movies'] });
    },
  });

  if (isLoading) {
    return <Typography>Loading movies...</Typography>;
  }

  if (error) {
    return <Alert severity="error">Failed to load movies</Alert>;
  }

  return (
    <Box sx={{ minHeight: 400 }}>
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Poster</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.items.map((movie: TMovie) => (
              <TableRow key={movie._id} hover>
                <TableCell width={80}>
                  <img
                    src={movie.posterUrl}
                    alt={movie.title}
                    style={{ width: 50, height: 75, objectFit: 'cover', borderRadius: 4 }}
                  />
                </TableCell>
                <TableCell>{movie.title}</TableCell>
                <TableCell>{movie.year}</TableCell>
                <TableCell>{movie.rating}</TableCell>
                <TableCell>
                  <IconButton
                    color="error"
                    onClick={() => deleteMutation.mutate(movie._id)}
                    disabled={deleteMutation.isPending}
                  >
                    <Delete />
                  </IconButton>
                  <IconButton color="primary">
                    <Edit />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {data?.pagination?.pages && data.pagination.pages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Pagination
            count={data.pagination.pages}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

