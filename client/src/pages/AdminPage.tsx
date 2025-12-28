import { useState, useCallback } from 'react';
import { Container, Box, Typography, Tabs, Tab, Paper, Divider } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { useAuth } from '../hooks/useAuth';
import { MovieForm } from '../components/admin/MovieForm';
import { MoviesTable } from '../components/admin/MoviesTable';

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

export const AdminPage: React.FC = () => {
  const { isAdmin } = useAuth();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = useCallback((_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  }, []);

  if (!isAdmin) {
    return (
      <Container sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h6" color="error">
          Admin access required
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Manage movies
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          centered
          sx={{ bgcolor: 'grey.100' }}
        >
          <Tab icon={<Add />} label="Add Movie" />
          <Tab icon={<Delete />} label="Manage Movies" />
        </Tabs>
        <Divider />

        <TabPanel value={tabValue} index={0}>
          <MovieForm />
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <MoviesTable />
        </TabPanel>
      </Paper>
    </Container>
  );
};

