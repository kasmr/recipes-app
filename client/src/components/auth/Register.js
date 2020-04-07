import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register, showAlert } from '../../redux/actions';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import './auth.scss';
import Alert from '../layout/Alert';

const Register = ({ register, error, showAlert, alert }) => {
  const classes = useStyles();

  useEffect(() => {
    if (error === 'User already exists') {
      showAlert();
    }
  }, [error]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    register({
      name,
      email,
      password,
    });
  };

  return (
    <form className={classes.root} autoComplete='off' onSubmit={onSubmit}>
      {alert && <Alert error={error} type='error' />}
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
          Account registration
        </Typography>
        <TextField
          required
          onChange={onChange}
          name='name'
          type='text'
          value={name}
          label='Username '
          variant='outlined'
        />
        <TextField
          required
          onChange={onChange}
          name='email'
          type='email'
          autoComplete='email'
          value={email}
          label='Email adress'
          variant='outlined'
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
        <TextField
          required
          onChange={onChange}
          name='password2'
          type='password'
          value={password2}
          label='Confirm password'
          helperText='Passwords must match'
          variant='outlined'
        />
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
        >
          Register
        </Button>
        <div className={classes.sub}>
          <Link to='/login'>
            <Typography color='primary'>
              Already have an account? Login
            </Typography>
          </Link>
        </div>
      </div>
    </form>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    alert: state.auth.alert,
  };
};

export default connect(mapStateToProps, { register, showAlert })(Register);

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
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
    },
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
