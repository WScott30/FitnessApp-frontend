import  { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import MacroForm from '../components/MacroForm';
import MacroList from '../components/MacroList';

const MacroCounter = () => {
  const [meals, setMeals] = useState([]);
  const [totalMacros, setTotalMacros] = useState({ protein: 0, carbs: 0, fat: 0 });

  useEffect(() => {
    const calculateTotalMacros = () => {
      const totals = meals.reduce((acc, meal) => {
        acc.protein += meal.protein;
        acc.carbs += meal.carbs;
        acc.fat += meal.fat;
        return acc;
      }, { protein: 0, carbs: 0, fat: 0 });
      setTotalMacros(totals);
    };
    calculateTotalMacros();
  }, [meals]);

  const addMeal = (newMeal) => {
    setMeals([...meals, newMeal]);
  };


  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Macro Counter
      </Typography>
      <MacroForm onAddMeal={addMeal} />
      <MacroList meals={meals} totalMacros={totalMacros} />
    </Container>
  );
};

export default MacroCounter;