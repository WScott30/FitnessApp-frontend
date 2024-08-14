import axios from 'axios';

const API_URL = 'http://localhost:3001/api/workouts';

const workoutService = {
  getWorkouts: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  addWorkout: async (workout) => {
    const response = await axios.post(API_URL, workout);
    return response.data;
  },

  editWorkout: async (workout) => {
    const response = await axios.put(`${API_URL}/${workout.id}`, workout);
    return response.data;
  },

  deleteWorkout: async (id) => {
    await axios.delete(`${API_URL}/${id}`);
  }
};

export default workoutService;