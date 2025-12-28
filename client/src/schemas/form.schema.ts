import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must not exceed 50 characters')
        .required('Full name is required'),
    email: yup
        .string()
        .email('Please enter a valid email address')
        .required('Email is required')
        .max(100, 'Email must not exceed 100 characters'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .max(128, 'Password must not exceed 128 characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        )
        .required('Password is required')
});


export const movieSchema = yup.object().shape({
  title: yup.
      string()
     .trim()
     .min(2, 'Title must be at least 2 characters')
     .max(200, 'Title too long')
    .required('Title is required'),

  description: yup
    .string()
    .trim()
    .min(10, 'Description must be at least 10 characters')
    .max(1000, 'Description too long')
    .required('Description is required'),

  year: yup
    .number()
    .min(1888, 'Year must be after 1888')
    .max(new Date().getFullYear() + 1, 'Year cannot be in the future')
    .required('Year is required'),
  
  releaseDate: yup
    .string()
    .required("Release date is required")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Must be in YYYY-DD-MM format"),

  duration: yup
    .number()
    .min(30, 'Duration must be at least 30 minutes')
    .max(600, 'Duration cannot exceed 10 hours')
    .required('Duration is required'),

  rating: yup
    .number()
    .min(0, 'Rating cannot be negative')
    .max(10, 'Rating cannot exceed 10')
    .required('Rating is required'),

  posterUrl: yup
    .string()
    .trim()
    .url('Must be a valid URL')
    .required('Poster URL is required'),

  imdbId: yup
    .string()
    .trim()
    .matches(/^tt\d{7,8}$/, 'Invalid IMDB ID format (e.g., tt0111161)')
    .optional(),
});

