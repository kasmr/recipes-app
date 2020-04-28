import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/actions';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Alert from '../layout/Alert';
import './auth.scss';

const Login = ({ isAuthenticated, error, login, history }) => {
  const classes = useStyles();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
  };

  return (
    <form className={classes.root} onSubmit={onSubmit}>
      {error && error !== 'User already exists' && (
        <Alert error={error} type='error' />
      )}
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
            <Typography color='primary' className={classes.link}>
              Don't have an account? Register
            </Typography>
          </Link>
        </div>
      </div>
    </form>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  error: PropTypes.string,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { login })(Login);

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
  link: {
    fontSize: '0.9rem',
  },
}));
