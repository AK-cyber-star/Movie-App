import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SearchPage } from './pages/SearchPage';
import { Container, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useAuth } from './hooks/useAuth';
import { useAppDispatch } from './hooks/useAppDispatch';
import { logout } from './store/slices/authSlice';
import { AdminPage } from './pages/AdminPage';
import { RegisterPage } from './pages/RegisterPage';

function AppContent() {
  const { user, isAdmin } = useAuth();
  const dispatch = useAppDispatch();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4"
            sx={{ flexGrow: 1, letterSpacing: "-0.5px", fontSize: {xs: "1rem", sm: "1.5rem", md: "1.75rem", lg: "2rem"}, lineHeight: { xs: 1.3, sm: 1.4, md: 1.5 } }}
           >
            Movie App
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem"}}}>
            {user ? (
              <>
                <Button color="inherit" href="/">Home</Button>
                <Button color="inherit" href="/search">Search</Button>
                {isAdmin && <Button color="inherit" href="/admin">Admin</Button>}
                <Button color="inherit" onClick={() => dispatch(logout()) }>
                  Logout ({user.name})
                </Button>
              </>
            ) : (
              <Button color="inherit" href="/login">Login</Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4, minHeight: '70vh' }}>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute/>}>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
          <Route element={<ProtectedRoute adminOnly={true}/>}>
            <Route path="/admin" element={<AdminPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Container>
    </>
  );
}

function App() {
    return (
        <Router>
        <AppContent />
        </Router>
    );
}

export default App;

