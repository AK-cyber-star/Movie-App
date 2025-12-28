import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
  Rating
} from '@mui/material';
import type { TMovie } from '../types/api.types';

interface MovieCardProps {
  movie: TMovie;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const posterUrl = movie.posterUrl || 'https://via.placeholder.com/300x450/333/fff?text=No+Image';

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: "space-around", maxWidth: "200px" }}>
      <CardMedia
        component="img"
        height="250"
        width="250"
        image={posterUrl}
        alt={movie.title}
        sx={{
          objectFit: 'cover',
          objectPosition: "center",
          backgroundColor: 'grey.200'
        }}
      />
      <CardContent sx={{ flexGrow: 1, pb: 2 }}>
        <Typography variant="h6" component="h3" noWrap>
          {movie.title}
        </Typography>
        <Typography sx={{ fontSize: 12}} gutterBottom>
          ({movie.year})
        </Typography>
        <Box sx={{ mb: 1 }}>
          <Rating
            value={movie.rating / 2}
            precision={0.1}
            readOnly
            size="small"
          />
          <Typography variant="body2" color="text.secondary">
            {movie.rating}/10
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 1,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {movie.description}
        </Typography>
        <Chip label={`${movie.duration} min`} size="small" color="primary" />
      </CardContent>
    </Card>
  );
};

