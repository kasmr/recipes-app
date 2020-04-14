import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '5rem',
    '& > *': {
      margin: theme.spacing(1),
      width: '80%',
      height: theme.spacing(16),
    },
  },
  form: {
    margin: '1rem',
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <Paper elevation={2}>
        <FormGroup row className={classes.form}>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name='checkedA'
                color='primary'
              />
            }
            label='Primary'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name='checkedA'
                color='primary'
              />
            }
            label='Require instructions'
          />
        </FormGroup>
      </Paper>
    </div>
  );
}
