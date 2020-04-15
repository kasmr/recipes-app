import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import { Avatar } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import CardHeader from '@material-ui/core/CardHeader';
import Tooltip from '@material-ui/core/Tooltip';

const Panel = ({ logout, user }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <CardHeader
        avatar={
          <DarkTooltip title='Click to logout'>
            <StyledBadge
              overlap='circle'
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              variant='dot'
              onClick={() => logout()}
            >
              <Avatar
                className={classes.large}
                onClick={() => logout()}
              ></Avatar>
            </StyledBadge>
          </DarkTooltip>
        }
        title={user && user.name}
        subheader={user && user.email}
      />

      <CardMedia className={classes.media} image='/menu.jpg' title='Recipes' />
      <List>
        <Link to='/'>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>
        <Link to='/extended-search'>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary='Extended Search' />
          </ListItem>
        </Link>
        <ListItem disabled button>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary='Favorites' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <Link to='/about'>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary='About' />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='open drawer'
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

Panel.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps, { logout })(Panel);

const useStyles = makeStyles((theme) => ({
  list: {
    width: 280,
    [theme.breakpoints.up('sm')]: {
      width: 350,
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  fullList: {
    width: 'auto',
  },
  large: {
    width: 60,
    height: 60,
    backgroundColor: theme.palette.primary.main,
    cursor: 'pointer',
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    cursor: 'pointer',
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const DarkTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    color: '#fff',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);
