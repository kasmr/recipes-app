import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
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
    <form className={classes.root} onSubmit={onSubmit}>
      <div className='form'>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
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
          autoComplete='email'
        />

        <TextField
          required
          onChange={onChange}
          name='password'
          type='password'
          value={password}
          label='Password'
          helperText='Password must contain at least 6 characters'
          variant='outlined'
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
        <div className={classes.sub}>
          <Link to='/register'>
            <Typography color='primary'>
              Don't have an account? Register
            </Typography>
          </Link>
        </div>
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
  avatar: {
    marginBottom: '1rem',
    backgroundColor: theme.palette.secondary.main,
  },
  text: {
    fontSize: '1.5rem',
  },
  button: {
    marginTop: '1rem',
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  sub: {
    width: '30%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
}));

export default Login;
