import React from 'react';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const MacroList = ({ macros, fetchMacros }) => {
  const handleDelete = async (id) => {
    await axios.delete(`/api/macros/${id}`);
    fetchMacros();
  };

  return (
    <List>
      {macros.map((macro) => (
        <ListItem key={macro._id}>
          <ListItemText primary={`Protein: ${macro.protein}g, Carbs: ${macro.carbs}g, Fats: ${macro.fats}g`} />
          <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(macro._id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default MacroList;