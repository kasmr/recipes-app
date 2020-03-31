import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));

const RecipeIngredients = ({ recipe }) => {
  const classes = useStyles();

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
            Ingredients:
          </Typography>
          <div className={classes.demo}>
            <List>
              {recipe.ingredients.map(ingredient => (
                <div key={uuidv4()}>
                  <ListItem>
                    <ListItemText
                      primary={ingredient.text}
                      secondary={`weight: ${Math.round(
                        ingredient.weight
                      )} grams`}
                    />
                  </ListItem>
                  <Divider variant='middle' />
                </div>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default RecipeIngredients;
