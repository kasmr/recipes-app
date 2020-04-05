import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import './auth.scss';
import { connect } from 'react-redux';
import { register } from '../../redux/actions';
import PropTypes from 'prop-types';

const Register = ({ register }) => {
  const classes = useStyles();

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
      <div className='form'>
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
        <TextField
          required
          onChange={onChange}
          name='password2'
          type='text'
          value={password2}
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
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
        >
          Register
        </Button>
      </div>
    </form>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

export default connect(null, { register })(Register);

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
