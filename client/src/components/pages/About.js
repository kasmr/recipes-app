import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { loadUser } from '../../redux/actions';
import PropTypes from 'prop-types';

const About = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <Typography variant='h4' color='textPrimary' component='h1' align='center'>
      This is a MERN Recipe App v0.1 developped using redux/redux-thunk and{' '}
      <br />
      material UI. Work in progress...
    </Typography>
  );
};

About.propTypes = {
  loadUser: PropTypes.func.isRequired,
};

export default connect(null, { loadUser })(About);
