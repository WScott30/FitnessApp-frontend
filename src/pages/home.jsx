import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box mt={5} mb={5}>
        <Typography variant="h2" gutterBottom align="center">
          Welcome to Fitness App
        </Typography>
        <Typography variant="h5" gutterBottom align="center">
          Your ultimate companion for a healthier and fitter life.
        </Typography>
      </Box>

      <Box mt={5} mb={5}>
        <Typography variant="h4" gutterBottom>
          Key Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Track Workouts"
                height="140"
                image="/images/workouts.jpg"
                title="Track Workouts"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Track Workouts
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Log your workouts and monitor your progress over time.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Meal Plans"
                height="140"
                image="/images/meals.jpg"
                title="Meal Plans"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Meal Plans
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Create and follow customized meal plans to meet your goals.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Health Stats"
                height="140"
                image="/images/stats.jpg"
                title="Health Stats"
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  Health Stats
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Keep track of your health metrics and improve over time.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box mt={5} mb={5}>
        <Typography variant="h4" gutterBottom>
          Get Started
        </Typography>
        <Typography variant="body1">
          Sign up today and start your journey towards a healthier and fitter you. With our app, you'll have all the tools you need to achieve your fitness goals.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
