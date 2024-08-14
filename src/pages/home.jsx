import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Box 
        display="flex" 
        flexDirection="column" 
        justifyContent="center" 
        alignItems="center" 
        height="100vh" 
      >
        <Typography variant="h3" gutterBottom>
          Welcome to Fitness Tracker
        </Typography>
        <Typography variant="h6" gutterBottom>
          Track your workouts and manage your nutrition with ease!
        </Typography>
        <Box mt={4}>
          <Button 
            variant="contained" 
            color="primary" 
            component={Link} 
            to="/workouts" 
            sx={{ mr: 2 }}
          >
            Go to Workouts
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            component={Link} 
            to="/macros"
          >
            Go to Macro Tracker
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;