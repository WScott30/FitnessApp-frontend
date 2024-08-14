import PropTypes from 'prop-types';
import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

const MacroList = ({ meals, totalMacros }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Meals:
      </Typography>
      <List>
        {meals.map((meal, index) => (
          <ListItem key={index}>
            <ListItemText 
              primary={meal.name} 
              secondary={`Protein: ${meal.protein}g, Carbs: ${meal.carbs}g, Fat: ${meal.fat}g`} 
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6" gutterBottom>
        Total Macros:
      </Typography>
      <Typography>
        Protein: {totalMacros.protein}g, Carbs: {totalMacros.carbs}g, Fat: {totalMacros.fat}g
      </Typography>
    </Box>
  );
};

MacroList.propTypes = {
  meals: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      protein: PropTypes.number.isRequired,
      carbs: PropTypes.number.isRequired,
      fat: PropTypes.number.isRequired,
    })
  ).isRequired,
  totalMacros: PropTypes.shape({
    protein: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
  }).isRequired,
};

export default MacroList;