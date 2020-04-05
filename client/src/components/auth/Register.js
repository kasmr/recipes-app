import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import './auth.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30%',
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
    },
  },
  text: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} autoComplete='off'>
      <Typography
        variant='h2'
        gutterBottom
        align='center'
        className={classes.text}
      >
        Account registration
      </Typography>
      <div className='form'>
        <TextField
          required
          id='outlined-required'
          label='Username '
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <AccountCircleOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          id='outlined-helperText'
          label='Email adress'
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <EmailOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          required
          id='outlined-helperText'
          label='Password'
          helperText='Password must contain at least 6 characters'
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <LockOpenIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          id='outlined-helperText'
          label='Confirm password'
          helperText='Passwords must match'
          variant='outlined'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <LockOpenIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button variant='contained' color='primary' size='large'>
          Register
        </Button>
      </div>
    </form>
  );
}
