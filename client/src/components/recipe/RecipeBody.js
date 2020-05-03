import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import PublicIcon from '@material-ui/icons/Public';
import CakeIcon from '@material-ui/icons/Cake';
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';

const RecipeBody = ({ recipe }) => {
  const classes = useStyles();

  const {
    title,
    sourceName,
    image,
    summary,
    readyInMinutes,
    healthScore,
    author,
    diets,
    dishTypes,
    cuisines,
    occasions,
    sourceUrl,
    spoonacularScore,
    aggregateLikes,
  } = recipe;

  return (
    <div className={classes.root}>
      <div className={classes.section1}>
        <Grid container alignItems='center' justify='center'>
          <Grid item>
            <Typography variant='h3' align='center' className={classes.title}>
              {title}
            </Typography>
            <Typography color='textSecondary' variant='h5' align='center'>
              {sourceName ? sourceName : author}
            </Typography>
          </Grid>
          <Grid item xs={12} align='center' style={{ marginTop: '1rem' }}>
            <img
              src={image ? image : '/img/no-image.jpg'}
              alt=''
              className={classes.image}
            />
          </Grid>
        </Grid>
        <Typography style={{ marginTop: '1rem' }} align='center'>
          Recipe health score
        </Typography>
        <Typography
          style={{ marginTop: '1rem' }}
          align='center'
          component='div'
        >
          <Rating
            name='half-rating-read'
            value={healthScore}
            precision={0.5}
            readOnly
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
          {diets && diets.length ? (
            <Chip
              className={classes.chip2}
              avatar={<Avatar>#</Avatar>}
              label={diets.toString()}
              color='primary'
            />
          ) : (
            <Chip
              className={classes.chip2}
              avatar={<Avatar>#</Avatar>}
              label='No diet labels'
              color='primary'
            />
          )}
        </Typography>
      </div>
      <div className={classes.section2}>
        <List>
          <ListItem>
            <ListItemText
              primary={
                <Typography variant='h5' color='textPrimary' gutterBottom>
                  Overview
                </Typography>
              }
              secondary={
                <Typography color='textPrimary'>
                  {summary && summary.replace(/<.*?>/g, '')}
                </Typography>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <TimerIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary='Total time to cook'
              secondary={`${readyInMinutes} minutes`}
            />
          </ListItem>
          <Divider variant='inset' component='div' />
          {cuisines && cuisines.length ? (
            <>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PublicIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary='Country of origin'
                  secondary={cuisines.toString()}
                />
              </ListItem>
              <Divider variant='inset' component='div' />
            </>
          ) : null}
          {occasions && occasions.length ? (
            <>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CakeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary='To cook on occasion'
                  secondary={occasions}
                />
              </ListItem>
              <Divider variant='inset' component='div' />
            </>
          ) : null}
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FastfoodIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary='Type of dish'
              secondary={dishTypes && dishTypes.toString()}
              className={classes.itemText}
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <SupervisedUserCircleRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary='To see instructions by'
              secondary={
                <a href={sourceUrl} target='_blank' rel='noopener noreferrer'>
                  <Chip
                    avatar={<Avatar component='span'>@</Avatar>}
                    label={sourceName}
                    clickable
                    color='primary'
                    component='span'
                  />
                </a>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <img
                  alt='spoon'
                  src='/img/spoonacular.png'
                  className={classes.spoon}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary='Spoonacular score'
              secondary={
                <Chip
                  label={`${spoonacularScore} %`}
                  color='primary'
                  component='span'
                />
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FavoriteIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary='Likes given'
              secondary={
                <Chip label={aggregateLikes} color='primary' component='span' />
              }
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default RecipeBody;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: '5rem',
    borderRadius: 5,
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  spoon: {
    width: 40,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  chip2: {
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      width: '300px',
    },
  },
  itemText: {
    wordWrap: 'break-word',
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));
