import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList';
import { Container, Typography } from '@mui/material';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = async () => {
    const response = await axios.get('http://localhost:3000/api/workouts');
    setWorkouts(response.data);
  };

  useEffect(() => {
    fetchWorkouts();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Workouts
      </Typography>
      <WorkoutForm fetchWorkouts={fetchWorkouts} />
      <WorkoutList workouts={workouts} fetchWorkouts={fetchWorkouts} />
    </Container>
  );
};

export default Workouts;