import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import './auth.scss';

const Login = () => {
  const classes = useStyles();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Login submit');
  };

  return (
    <form className={classes.root} autoComplete='off' onSubmit={onSubmit}>
      <div className='form'>
        <Typography
          variant='h2'
          gutterBottom
          align='center'
          className={classes.text}
        >
          Account Login
        </Typography>
        <TextField
          required
          onChange={onChange}
          name='email'
          type='email'
          value={email}
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
          onChange={onChange}
          name='password'
          type='text'
          value={password}
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
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
        >
          Login
        </Button>
      </div>
    </form>
  );
};

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
  button: {
    marginTop: '1rem',
  },
}));

export default Login;
