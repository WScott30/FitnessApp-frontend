import  { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WorkoutController from '../controllers/WorkoutController';
import { 
  Container, 
  Typography, 
  Paper, 
  Box, 
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material';

const WorkoutDetail = () => {
  const [workout, setWorkout] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkout = () => {
      const workouts = WorkoutController.getWorkouts();
      const foundWorkout = workouts.find(w => w.id === parseInt(id));
      if (foundWorkout) {
        setWorkout(foundWorkout);
      } else {
        // Handle case where workout is not found
        navigate('/workouts', { replace: true });
      }
    };

    fetchWorkout();
  }, [id, navigate]);

  if (!workout) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container maxWidth="md">
      <Paper elevation={3}>
        <Box p={3}>
          <Typography variant="h4" gutterBottom>
            Workout Details
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">Date</TableCell>
                  <TableCell>{workout.date}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Type</TableCell>
                  <TableCell>{workout.type}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">Duration</TableCell>
                  <TableCell>{workout.duration} minutes</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Box mt={3} display="flex" justifyContent="space-between">
            <Button 
              variant="contained" 
              color="primary" 
              onClick={() => navigate(`/workouts/${id}/edit`)}
            >
              Edit
            </Button>
            <Button 
              variant="outlined" 
              color="secondary" 
              onClick={() => navigate('/workouts')}
            >
              Back to List
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default WorkoutDetail;