import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';
import Rating from '@material-ui/lab/Rating';
import './skeleton.scss';

const SkeletonCurrent = () => {
  const classes = useStyles();

  return (
    <div className={classes.card}>
      <div className='skelet-top'>
        <Skeleton animation='wave' height={120} />
        <Skeleton animation='wave' height={30} className='sub-heading' />
        <Skeleton animation='wave' variant='rect' className={classes.media} />
        <Skeleton animation='wave' height={30} className='sub-heading2' />
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
        <Skeleton
          animation='wave'
          height={50}
          style={{ marginBottom: 6 }}
          className='sub-heading3'
        />
      </div>
      <CardContent>
        <React.Fragment>
          <Skeleton
            animation='wave'
            height={50}
            width='35%'
            style={{ marginTop: '2rem' }}
          />
          <Skeleton animation='wave' height={50} width='15%' />
          <Skeleton animation='wave' height={50} width='15%' />
        </React.Fragment>
      </CardContent>
    </div>
  );
};

export default SkeletonCurrent;

const useStyles = makeStyles(theme => ({
  card: {
    minHeight: '85vh'
  },
  media: {
    height: 290
  }
}));
