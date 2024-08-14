// src/containers/MacroTracker/MacroForm.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Box } from '@mui/material';

const MacroForm = ({ onAddMeal }) => {
  const [newMeal, setNewMeal] = useState({ name: '', protein: 0, carbs: 0, fat: 0 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMeal({ ...newMeal, [name]: name === 'name' ? value : Number(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMeal.name && (newMeal.protein > 0 || newMeal.carbs > 0 || newMeal.fat > 0)) {
      onAddMeal(newMeal);
      setNewMeal({ name: '', protein: 0, carbs: 0, fat: 0 });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={2}>
        <TextField
          label="Meal Name"
          name="name"
          value={newMeal.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Protein (g)"
          name="protein"
          type="number"
          value={newMeal.protein}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Carbs (g)"
          name="carbs"
          type="number"
          value={newMeal.carbs}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Fat (g)"
          name="fat"
          type="number"
          value={newMeal.fat}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Meal
        </Button>
      </Box>
    </form>
  );
};

MacroForm.propTypes = {
  onAddMeal: PropTypes.func.isRequired,
};

export default MacroForm;