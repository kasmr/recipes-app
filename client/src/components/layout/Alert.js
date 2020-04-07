import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AlertMUI from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alert = ({ error, type }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AlertMUI severity={type}>{error}</AlertMUI>
    </div>
  );
};

export default Alert;
