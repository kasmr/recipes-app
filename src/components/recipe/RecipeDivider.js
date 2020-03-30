import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  chip: {
    margin: theme.spacing(0.5)
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

export default function RecipeDivider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems='center'>
          <Grid item xs>
            <Typography gutterBottom variant='h4'>
              Toothbrush
            </Typography>
          </Grid>
          <Grid item>
            <Typography gutterBottom variant='h6'>
              $4.50
            </Typography>
          </Grid>
        </Grid>
        <Typography color='textSecondary' variant='body2'>
          Pinstriped cornflower blue cotton blouse takes you on a walk to the
          park or just down the hall.
        </Typography>
      </div>
      <Divider variant='middle' />
      <div className={classes.section2}>
        <Typography gutterBottom variant='body1'>
          Select type
        </Typography>
        <div>
          <Chip className={classes.chip} label='Extra Soft' />
          <Chip className={classes.chip} color='primary' label='Soft' />
          <Chip className={classes.chip} label='Medium' />
          <Chip className={classes.chip} label='Hard' />
        </div>
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Photos' secondary='Jan 9, 2014' />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Work' secondary='Jan 7, 2014' />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary='Vacation' secondary='July 20, 2014' />
          </ListItem>
        </List>
      </div>
      <div className={classes.section3}>
        <Button color='primary'>Add to cart</Button>
      </div>
    </div>
  );
}
