import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, Button, Grid, Paper } from '@mui/material';
import PiggyBankImage from '../assets/piggy-bank-illustration.png'; // Replace with your actual image path

function LandingPage() {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" mt={8}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to PiggyPal: Your Financial Friend
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Take control of your finances, achieve your goals, and start building wealth with PiggyPal.
        </Typography>
        <Box mt={4}>
          <img src={PiggyBankImage} alt="Piggy bank illustration" style={{ width: '100%', maxWidth: '500px' }} />
        </Box>
      </Box>

      <Box mt={8}>
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4} mt={4}>
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Track Your Expenses
              </Typography>
              <Typography color="textSecondary">
                Monitor your spending and stay on top of your finances.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Set Financial Goals
              </Typography>
              <Typography color="textSecondary">
                Define your objectives and work towards achieving them.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Budgeting Made Easy
              </Typography>
              <Typography color="textSecondary">
                Create a personalized budget that works for you.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Investment Insights
              </Typography>
              <Typography color="textSecondary">
                Get expert advice on growing your wealth.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box mt={8} textAlign="center">
        <Button variant="contained" color="primary" size="large" component={Link} to="/signup">
          Sign up for free and start your financial journey today!
        </Button>
      </Box>

      <Box mt={8} textAlign="center">
        <Typography variant="h6" gutterBottom>
          Trusted by Thousands
        </Typography>
        <Typography color="textSecondary">
          Secure: Bank-level security measures to protect your data.
          <br />
          Trusted: Thousands of users trust PiggyPal with their finances.
          <br />
          Expert-Backed: Our team of financial experts is always available to help.
        </Typography>
      </Box>

      <Box mt={8} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          © 2024 PiggyPal. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
}

export default LandingPage;
