import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

const WorkoutForm = ({ fetchWorkouts }) => {
  const [workout, setWorkout] = useState({ type: '', duration: '' });

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/workouts', workout);
    fetchWorkouts();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Workout Type"
        name="type"
        value={workout.type}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Duration"
        name="duration"
        type="number"
        value={workout.duration}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add Workout
      </Button>
    </form>
  );
};

export default WorkoutForm;