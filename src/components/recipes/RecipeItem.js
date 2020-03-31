import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  red: {
    backgroundColor: red[600]
  }
}));

const RecipeItem = ({ image, title, source, labels, calories }) => {
  const classes = useStyles();

  return (
    <div className='card'>
      <Card className={classes.root}>
        <Link to={`/recipe/${title}/${source}`}>
          <CardHeader
            avatar={
              <Avatar aria-label='recipe' className={classes.red}>
                {title.substring(0, 1)}
              </Avatar>
            }
            title={title}
            subheader={source}
            action={
              <Rating
                style={{ marginTop: '1.2rem' }}
                name='half-rating-read'
                defaultValue={2.5}
                precision={0.5}
                readOnly
                size='small'
              />
            }
          />
        </Link>
        <CardMedia className={classes.media} image={image} title='title' />
        <CardContent className='card-content'>
          <Typography variant='body2' color='textSecondary' component='div'>
            <Typography
              variant='body2'
              color='textSecondary'
              component='div'
              align='center'
              style={{ marginBottom: '1rem' }}
            ></Typography>
            <Chip
              avatar={<Avatar>@</Avatar>}
              label={labels.slice(0, 2).toString()}
              clickable
              color='primary'
            />
            <Chip
              label={`Calories: ${Math.round(calories)} kcal`}
              color={calories > 4000 ? 'secondary' : 'default'}
              style={{ marginTop: '1rem' }}
            />
          </Typography>
        </CardContent>
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
          <CardActions>
            <Link to={`/recipe/${title}/${source}`}>
              <Button
                size='small'
                variant='contained'
                color='primary'
                style={{ marginLeft: '7rem' }}
              >
                Learn More
              </Button>
            </Link>
          </CardActions>
        </CardActions>
      </Card>
    </div>
  );
};

export default RecipeItem;