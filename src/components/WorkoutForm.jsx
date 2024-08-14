// WorkoutForm.jsx
import  { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { TextField, Button, Box } from '@mui/material';

const WorkoutForm = () => {
  const { handleSubmit } = useOutletContext();
  const [workout, setWorkout] = useState({ type: '', duration: '', date: '' });

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(workout);
    setWorkout({ type: '', duration: '', date: '' }); // Reset form
  };

  return (
    <form onSubmit={onSubmit}>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Workout Type"
          name="type"
          value={workout.type}
          onChange={handleChange}
          required
        />
        <TextField
          label="Duration (minutes)"
          name="duration"
          type="number"
          value={workout.duration}
          onChange={handleChange}
          required
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          value={workout.date}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add Workout
        </Button>
      </Box>
    </form>
  );
};

export default WorkoutForm;