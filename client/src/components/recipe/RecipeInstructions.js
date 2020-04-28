import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { v4 as uuidv4 } from 'uuid';

const RecipeInstructions = ({ recipe }) => {
  const classes = useStyles();

  const { analyzedInstructions } = recipe;

  return (
    <div className={classes.root}>
      <Grid container justify='center'>
        <Grid item xs={12} md={6}>
          <Typography
            variant='h5'
            className={classes.title}
            justify='center'
            align='center'
          >
            Cooking instructions:
          </Typography>
          <div className={classes.body}>
            <List>
              {analyzedInstructions &&
                analyzedInstructions.map((instruction) =>
                  instruction.steps.map((steps) => (
                    <div key={uuidv4()}>
                      <ListItem>
                        <ListItemText
                          primary={steps.step}
                          secondary={`Step № ${steps.number}`}
                        />
                      </ListItem>
                      <Divider variant='middle' />
                    </div>
                  ))
                )}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default RecipeInstructions;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  body: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: 5,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));
