import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Container, TextField, Button, Grid, Typography, Box, CircularProgress } from '@mui/material';
import { moviesAPI } from '../lib/api';
import { MovieCard } from '../components/MovieCard';
import type { TMovie } from '../types/api.types';

export const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  const { data: searchResults, isLoading } = useQuery({
    queryKey: ['search', debouncedQuery],
    queryFn: () => moviesAPI.search(debouncedQuery),
    enabled: !!debouncedQuery,
  });

  const handleSearch = () => {
    setDebouncedQuery(query);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          🔍 Search Movies
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search by title or description..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={{ maxWidth: 500 }}
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            disabled={!query.trim()}
          >
            Search
          </Button>
          {debouncedQuery && (
            <Button
              variant="outlined"
              onClick={() => {
                setQuery('');
                setDebouncedQuery('');
              }}
            >
              Clear
            </Button>
          )}
        </Box>
      </Box>

      {isLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
          <CircularProgress />
        </Box>
      ) : debouncedQuery ? (
        <>
          <Typography variant="h6">
            Found {searchResults?.length || 0} results for "{debouncedQuery}"
          </Typography>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {searchResults?.map((movie: TMovie) => (
              <Grid key={movie._id}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Typography variant="h6" color="text.secondary" align="center" sx={{ mt: 8 }}>
          Enter a search term above to find movies...
        </Typography>
      )}
    </Container>
  );
};

