import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AlertMUI from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

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

  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <AlertMUI onClose={handleClose} severity={type}>
          {error}
        </AlertMUI>
      </Snackbar>
    </div>
  );
};

export default Alert;
