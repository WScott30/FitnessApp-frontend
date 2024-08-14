import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const WorkoutList = ({ workouts, onDelete, onEdit }) => {
  if (!workouts || workouts.length === 0) {
    return <p>No workouts found. Add a new workout to get started!</p>;
  }

  return (
    <List>
      {workouts.map((workout) => (
        <ListItem 
          key={workout.id} 
          secondaryAction={
            <>
              <IconButton edge="end" aria-label="edit" onClick={() => onEdit(workout.id)}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => onDelete(workout.id)}>
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <ListItemText
            primary={workout.type}
            secondary={`${workout.duration} minutes on ${workout.date}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

WorkoutList.propTypes = {
  workouts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      type: PropTypes.string.isRequired,
      duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      date: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

WorkoutList.defaultProps = {
  workouts: [],
};

export default WorkoutList;