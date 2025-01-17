import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import React from 'react';
import useModal from '@/hooks/modals';

const Login: React.FC = () => {
  const { modal, clearModal } = useModal();
  console.log(modal);

  if (modal?.target !== 'login' || modal.status !== 'flex') {
    return null;
  }

  return (
    <Box
      className="modal-container"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          backgroundColor: '#fff',
          padding: 4,
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          width: '90%',
          maxWidth: '400px',
        }}
      >
        <Box
          sx={{
            position: 'relative', 
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Welcome back
          </Typography>
          <IconButton
            aria-label="close"
            onClick={() => clearModal()}
            sx={{
            }}
          >
            <Close />
          </IconButton>
        </Box>
        <form>
        <TextField
          label="Email"
          type="email"
          fullWidth
          required
          margin="normal"
          variant="outlined"
          sx={{
            '& .MuiInputLabel-root': {
              color: 'black', 
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'black', 
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black', 
              },
              '&:hover fieldset': {
                borderColor: 'black', 
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black', 
              },
            },
            '& .MuiOutlinedInput-input::placeholder': {
              color: 'black', 
            },
          }}
          
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          required
          margin="normal"
          variant="outlined"
          sx={{
            '& .MuiInputLabel-root': {
              color: 'black',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'black', 
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black', 
              },
              '&:hover fieldset': {
                borderColor: 'black', 
              },
              '&.Mui-focused fieldset': {
                borderColor: 'black', 
              },
            },
            '& .MuiOutlinedInput-input::placeholder': {
              color: 'black', 
            },
          }}
          
        />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ 
              marginTop: 2, 
              padding:'1rem',
              color:'white',
              backgroundColor:'background.default'
            }}
          >
            Login
          </Button>
        </form>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          sx={{ marginTop: 2 }}
        >
          Don't have an account? <a href="#">Register</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;