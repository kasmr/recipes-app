import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ShareIcon from '@material-ui/icons/Share';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import '../recipes/recipesList.scss';

const stringToColor = () => {
  let hex = Math.floor(Math.random() * 0xffffff);
  let color = '#' + hex.toString(16);

  return color;
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  red: {
    backgroundColor: theme.palette.secondary.main,
  },
  button1: {
    marginLeft: '2.5rem',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '7rem',
    },
  },
  avatar: {
    backgroundColor: `${stringToColor()}`,
  },
}));

const ResultItem = ({ recipe }) => {
  const classes = useStyles();

  const { title, id, image } = recipe;

  return (
    <Box className='card' boxShadow={2}>
      <Card className={classes.root}>
        <Link to={`/recipe/${id}`}>
          <CardHeader
            className='card-header'
            avatar={
              <Avatar aria-label='recipe' className={classes.avatar}>
                {title.substring(0, 1)}
              </Avatar>
            }
            title={title}
          />

          <CardMedia className={classes.media} image={image} title='title' />
        </Link>
        <CardActions disableSpacing>
          <FormControlLabel
            control={
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                name='checkedH'
              />
            }
            style={{ margin: '0' }}
          />
          <IconButton aria-label='share' style={{ padding: '8px' }}>
            <ShareIcon />
          </IconButton>
          <CardActions className={classes.button1}>
            <Link to={`/recipe/${id}`}>
              <Button size='small' variant='contained' color='primary'>
                Learn More
              </Button>
            </Link>
          </CardActions>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ResultItem;
