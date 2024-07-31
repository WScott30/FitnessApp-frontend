import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);

  // Function to fetch workouts
  const fetchWorkouts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/workouts');
      setWorkouts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect to load workouts on component mount
  useEffect(() => {
    fetchWorkouts();
  }, []);

  // Function to handle deletion of a workout
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/workouts/${id}`);
      fetchWorkouts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="workout-list-div">
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
      </div>
    </div>
  );
}

export default WorkoutList;
