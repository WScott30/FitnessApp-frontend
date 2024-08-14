import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import WorkoutList from '../components/WorkoutList';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch workouts from localStorage or API
    const storedWorkouts = JSON.parse(localStorage.getItem('workouts')) || [];
    setWorkouts(storedWorkouts);
  }, []);

  const handleDeleteWorkout = (id) => {
    const updatedWorkouts = workouts.filter(workout => workout.id !== id);
    setWorkouts(updatedWorkouts);
    localStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
  };

  const handleEditWorkout = (id) => {
    navigate(`/workouts/${id}/edit`);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Workouts
      </Typography>
      <Box mb={4}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate('/workouts/new')}
        >
          Add New Workout
        </Button>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <WorkoutList 
            workouts={workouts} 
            onDelete={handleDeleteWorkout}
            onEdit={handleEditWorkout}
          />
        </Grid>
      </Grid>
      <Outlet context={{ workouts, handleDeleteWorkout, handleEditWorkout }} />
    </Container>
  );
};

export default Workouts;