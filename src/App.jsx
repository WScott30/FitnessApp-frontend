import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { CssBaseline, Container, AppBar, Toolbar, Typography, Button, Box, Grid } from '@mui/material';
import Home from './pages/home';
import Workouts from './pages/Workouts';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import MacroCounter from './pages/Macros'

function App() {
  return (
    <Router>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Fitness Tracker
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/workouts">
            Workouts
          </Button>
          <Button color="inherit" component={Link} to="/macros">
            Macro Tracker
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/workouts" element={<Workouts />}>
                  <Route index element={<WorkoutList />} />
                  <Route path="new" element={<WorkoutForm />} />
                  <Route path=":id/edit" element={<WorkoutForm />} />
                </Route>
                <Route path="/macros" element={<MacroCounter />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Router>
  );
}

export default App;