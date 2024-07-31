import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const WorkoutList = ({ workouts, fetchWorkouts }) => {
  const handleDelete = async (id) => {
    await axios.delete(`/api/workouts/${id}`);
    fetchWorkouts();
  };

  return (
    <List>
      {workouts.map((workout) => (
        <ListItem key={workout._id}>
          <ListItemText primary={`${workout.type} - ${workout.duration} mins`} />
          <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(workout._id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default WorkoutList;