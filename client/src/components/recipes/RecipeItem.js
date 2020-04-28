import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './recipesList.scss';
import ShareModal from '../layout/ShareModal';
import { getDiets, setQuery } from '../../redux/actions';
import { connect } from 'react-redux';

const RecipeItem = ({
  title,
  source,
  summary,
  time,
  id,
  healthScore,
  author,
  diets,
  image,
  getDiets,
  setQuery,
}) => {
  const classes = useStyles();

  const modifiedDiets = diets.toString();

  // const onClick = () => {
  //   getDiets(modifiedDiets);
  //   setQuery(modifiedDiets);
  // };

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
            subheader={source ? source : author}
          />

          <CardMedia
            className={classes.media}
            image={image}
            title='title'
            component='div'
          />
        </Link>
        <CardContent>
          <Typography
            variant='body2'
            color='textSecondary'
            component='div'
            className='card-content'
          >
            <Typography
              variant='body2'
              color='textSecondary'
              component='div'
              align='center'
              style={{ marginBottom: '1rem' }}
            >
              <Rating
                name='half-rating-read'
                value={healthScore}
                precision={0.5}
                readOnly
                size='medium'
              />
              <Typography variant='body2' color='textSecondary' component='div'>
                {summary && summary.slice(0, 75).replace(/<.*?>/g, '')}
              </Typography>
            </Typography>
            {diets.length ? (
              <Chip
                avatar={<Avatar>#</Avatar>}
                label={diets.slice(0, 2).toString()}
                color='primary'
                // onClick={onClick}
              />
            ) : (
              <Chip
                avatar={<Avatar>#</Avatar>}
                label='No diet labels'
                color='primary'
              />
            )}
            <Chip
              label={`Time to cook ${time} minutes`}
              color={time > 60 ? 'secondary' : 'default'}
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
                name='check'
              />
            }
            style={{ margin: '0' }}
          />
          <ShareModal id={id} />
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

const mapStateToProps = (state) => {
  return {
    query: state.recipes.query,
  };
};

export default connect(mapStateToProps, { getDiets, setQuery })(RecipeItem);

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
    marginLeft: 'auto',
  },
  avatar: {
    backgroundColor: `${stringToColor()}`,
  },
}));
