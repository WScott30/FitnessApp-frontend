import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

const MacroForm = ({ fetchMacros }) => {
  const [macro, setMacro] = useState({ protein: '', carbs: '', fats: '' });

  const handleChange = (e) => {
    setMacro({ ...macro, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/api/macros', macro);
    fetchMacros();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Protein"
        name="protein"
        type="number"
        value={macro.protein}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Carbs"
        name="carbs"
        type="number"
        value={macro.carbs}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Fats"
        name="fats"
        type="number"
        value={macro.fats}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Add Macro
      </Button>
    </form>
  );
};

export default MacroForm;