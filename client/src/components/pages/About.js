import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { loadUser } from '../../redux/actions';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '94.3vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
    },
  },
  img: {
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
  },
}));

const About = ({ loadUser }) => {
  const classes = useStyles();

  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div className={classes.root}>
      <Typography
        variant='h4'
        color='textPrimary'
        component='h1'
        align='center'
        className={classes.info}
      >
        This is a MERN Recipe App v0.1 developped using redux/redux-thunk and{' '}
        <br />
        material UI. Work in progress...
      </Typography>
      <Typography
        variant='h4'
        color='textPrimary'
        component='h1'
        align='center'
        className={classes.info}
      >
        Recipes information was provided by Spoonacular API
        <a
          href='https://spoonacular.com/food-api'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='/img/spoonacular.png' alt='link' className={classes.img} />
        </a>
      </Typography>
    </div>
  );
};

About.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(null, { loadUser })(About);
