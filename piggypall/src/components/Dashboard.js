import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Paper,
  Avatar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
  CardActions,
  Divider,
  Container,
} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SavingsIcon from '@mui/icons-material/Savings';
import TimelineIcon from '@mui/icons-material/Timeline';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from 'react-router-dom';

function Dashboard({ user, onLogout }) {
  const [balance, setBalance] = useState(500); // Example balance
  const [totalSavings, setTotalSavings] = useState(1500); // Example total savings
  const [recentTransactions, setRecentTransactions] = useState([
    { id: 1, description: 'Deposit', amount: 100 },
    { id: 2, description: 'Withdrawal', amount: -50 },
    { id: 3, description: 'Goal Savings', amount: 300 },
  ]); // Example transactions
  const [goalName, setGoalName] = useState('New Bike');
  const [goalProgress, setGoalProgress] = useState(70); // Example progress percentage
  const [timeLeft, setTimeLeft] = useState('3 months'); // Example time left

  const [transactionAmount, setTransactionAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handleAddMoney = () => {
    // Logic to add money
    console.log('Add Money:', transactionAmount, paymentMethod);
  };

  const handleWithdrawMoney = () => {
    // Logic to withdraw money
    console.log('Withdraw Money:', transactionAmount);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4">
          <strong>PiggyPal</strong>
        </Typography>
        <Box display="flex" alignItems="center">
          <Avatar alt={user.displayName} src={user.photoURL} sx={{ mr: 2 }} />
          <Typography variant="h6">{user.email}</Typography>
          <Button onClick={onLogout} color="secondary" sx={{ ml: 3 }}>
            Logout
          </Button>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {/* Welcome Section */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h5">
              Hello, <strong>{user.displayName || 'User'}</strong>!
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              You're one step closer to achieving your financial goals!
            </Typography>
          </Paper>
        </Grid>

        {/* Account Overview Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <AccountBalanceIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
              <Typography variant="h6">Account Balance: ${balance}</Typography>
            </Box>
            <Divider />
            <Box display="flex" alignItems="center" mt={2}>
              <SavingsIcon color="secondary" sx={{ fontSize: 40, mr: 2 }} />
              <Typography variant="h6">Total Savings: ${totalSavings}</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
              Recent Transactions:
            </Typography>
            <ul>
              {recentTransactions.map((transaction) => (
                <li key={transaction.id}>
                  {transaction.description}: ${transaction.amount}
                </li>
              ))}
            </ul>
          </Paper>
        </Grid>

        {/* Goal Progress Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <TimelineIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
              <Typography variant="h6">Current Goal: {goalName}</Typography>
            </Box>
            <Typography variant="subtitle1">
              Progress: {goalProgress}% complete
            </Typography>
            <Typography variant="subtitle1">
              Time Left: {timeLeft}
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Set a New Goal
            </Button>
          </Paper>
        </Grid>

        {/* Add/Withdraw Money Section */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Add Money</Typography>
              <TextField
                label="Amount"
                variant="outlined"
                fullWidth
                margin="normal"
                value={transactionAmount}
                onChange={(e) => setTransactionAmount(e.target.value)}
              />
              <FormControl fullWidth margin="normal">
                <InputLabel id="payment-method-label">Payment Method</InputLabel>
                <Select
                  labelId="payment-method-label"
                  id="payment-method"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
                  <MenuItem value="Credit Card">Credit Card</MenuItem>
                  <MenuItem value="PayPal">PayPal</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                color="success"
                fullWidth
                onClick={handleAddMoney}
              >
                Add Money
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Withdraw Money</Typography>
              <TextField
                label="Amount"
                variant="outlined"
                fullWidth
                margin="normal"
                value={transactionAmount}
                onChange={(e) => setTransactionAmount(e.target.value)}
              />
              <Button
                variant="contained"
                color="error"
                fullWidth
                onClick={handleWithdrawMoney}
              >
                Confirm Withdrawal
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Fun Financial Lessons Section */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <SchoolIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Typography variant="h6">Lesson of the Week: Smart Saving Tips</Typography>
              </Box>
              <Button variant="outlined" color="primary">
                Start Learning
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Footer Section */}
      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          PiggyPal Tips: Save regularly and watch your wealth grow!
          <br />
          Need help? Visit our <Button component="a" href="#">Help Center</Button>
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
          © 2024 PiggyPal. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
}

export default Dashboard;
