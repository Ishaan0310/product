import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Checkout() {
  return (
    <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: "white",
        height: '100vh',
        margin: '50px 270px 40px 30px',
        '@media (max-width: 960px)': { // md breakpoint
          margin: '20px 100px 20px 20px',
        },
        '@media (max-width: 600px)': { // sm breakpoint
          margin: '10px 50px 10px 10px',
        },
      }}>
      <Typography variant="h4" gutterBottom align="center">
        Checkout
      </Typography>
      <Grid container spacing={3} mt={1} sx={{ justifyContent: 'center' }}>  {/* Center the grid content */}
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Billing Information
            </Typography>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              sx={{ width: '80%' }}
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              sx={{ width: '80%' }}
            />
            <TextField
              fullWidth
              label="Address"
              margin="normal"
              sx={{ width: '80%' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Payment Information
            </Typography>
            <TextField
              fullWidth
              label="Credit Card Number"
              margin="normal"
              sx={{ width: '80%' }}
            />
            <TextField
              fullWidth
              label="Expiration Date"
              margin="normal"
              sx={{ width: '80%' }}
            />
            <TextField
              fullWidth
              label="CVV"
              margin="normal"
              sx={{ width: '80%' }}
            />
          </Box>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" sx={{ mt: 2, width: '40%' }}>
        Place Order
      </Button>
    </Container>
  );
}

export default Checkout;