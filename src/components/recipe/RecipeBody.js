import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';
import Chip from '@material-ui/core/Chip';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import TimerIcon from '@material-ui/icons/Timer';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  chip2: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex'
    }
  },
  section1: {
    margin: theme.spacing(3, 2)
  },
  section2: {
    margin: theme.spacing(2)
  },
  section3: {
    margin: theme.spacing(3, 1, 1)
  }
}));

const labelsArray = [
  'Low-Carb',
  'Low-Fat',
  'Low-Sodium',
  'Balanced',
  'High-Fiber',
  'High-Protein'
];

const RecipeBody = ({ recipe }) => {
  const classes = useStyles();

  const {
    label,
    image,
    source,
    calories,
    dietLabels,
    healthLabels,
    totalWeight,
    totalTime,
    url
  } = recipe;

  console.log(dietLabels);

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems='center' justify='center'>
          <Grid item>
            <Typography variant='h3' align='center'>
              {label}
            </Typography>
            <Typography color='textSecondary' variant='h5' align='center'>
              {source}
            </Typography>
          </Grid>
          <Grid item xs={12} align='center' style={{ marginTop: '1rem' }}>
            <img src={image} alt='' />
          </Grid>
        </Grid>
        <Typography style={{ marginTop: '1rem' }} align='center'>
          Recipe rating
        </Typography>
        <Typography
          style={{ marginTop: '1rem' }}
          align='center'
          component='div'
        >
          <Rating
            name='half-rating'
            defaultValue={0}
            precision={0.5}
            size='large'
          />
        </Typography>
        <Typography
          color='textSecondary'
          variant='body2'
          style={{ marginTop: '1rem' }}
          align='center'
          component='div'
        >
          <Chip
            className={classes.chip2}
            avatar={<Avatar>@</Avatar>}
            label={healthLabels.toString()}
            clickable
            color='primary'
          />
        </Typography>
      </div>
      <Divider variant='middle' />
      <div className={classes.section2}>
        <Typography variant='body1'>Diet labels</Typography>
        <div>
          {labelsArray.map(labels => (
            <Chip
              key={uuidv4()}
              className={classes.chip}
              color={dietLabels.toString() === labels ? 'primary' : 'default'}
              label={labels}
            />
          ))}
        </div>
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <TimerIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary='Total time to cook'
              secondary={`${totalTime} minutes`}
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FastfoodIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary='Calories'
              secondary={`${Math.round(calories)} kcal`}
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem>
            <ListItemAvatar>
              <Avatar>W</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary='Total weight'
              secondary={`${Math.round(totalWeight)} grams`}
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImportContactsRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary='To see instructions by'
              secondary={
                <a href={url} target='_blank' rel='noopener noreferrer'>
                  <Chip
                    avatar={<Avatar component='span'>@</Avatar>}
                    label={source}
                    clickable
                    color='primary'
                    component='span'
                  />
                </a>
              }
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default RecipeBody;
