import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';
import Rating from '@material-ui/lab/Rating';
import '../recipes/recipesList.scss';

const SkeletonRecipe = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Skeleton animation='wave' variant='circle' width={40} height={40} />
        }
        title={
          <Skeleton
            animation='wave'
            height={10}
            width='80%'
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation='wave' height={10} width='40%' />}
      />
      <Skeleton animation='wave' variant='rect' className={classes.media} />

      <CardContent>
        <React.Fragment>
          <Rating
            name='size-large'
            disabled
            defaultValue={0}
            size='large'
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 12
            }}
          />
          <Skeleton animation='wave' height={50} style={{ marginBottom: 6 }} />
          <Skeleton animation='wave' height={50} />
          <Skeleton animation='wave' height={50} />
        </React.Fragment>
      </CardContent>
    </Card>
  );
};

export default SkeletonRecipe;

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 340,
    minHeight: 480,
    margin: '2rem'
  },
  media: {
    height: 190
  }
}));
