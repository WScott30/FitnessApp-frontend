import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MacroForm from '../components/MacroForm';
import MacroList from '../components/MacroList';
import { Container, Typography } from '@mui/material';

const Macros = () => {
  const [macros, setMacros] = useState([]);

  const fetchMacros = async () => {
    const response = await axios.get('http:localhost:3000/api/macros');
    setMacros(response.data);
  };

  useEffect(() => {
    fetchMacros();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Macros
      </Typography>
      <MacroForm fetchMacros={fetchMacros} />
      <MacroList macros={macros} fetchMacros={fetchMacros} />
    </Container>
  );
};

export default Macros;