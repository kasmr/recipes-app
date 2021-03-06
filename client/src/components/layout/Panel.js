import React, { useState } from 'react';
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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Brightness4OutlinedIcon from '@material-ui/icons/Brightness4Outlined';
import Brightness7Icon from '@material-ui/icons/Brightness7';

const Panel = ({ logout, user, handleDarkMode, dark, favoriteIDS }) => {
  const classes = useStyles();
  const [state, setState] = useState({
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
      {user ? (
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
                onClick={logout}
              >
                <Avatar className={classes.large} onClick={logout}></Avatar>
              </StyledBadge>
            </DarkTooltip>
          }
          title={user && user.name}
          subheader={user && user.email}
        />
      ) : (
        <CardHeader
          avatar={
            <DarkTooltip title='Click to login'>
              <Link to='/login'>
                <StyledBadge
                  overlap='circle'
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  variant='dot'
                >
                  <Avatar className={classes.large}></Avatar>
                </StyledBadge>
              </Link>
            </DarkTooltip>
          }
          title='Unauthorized'
          subheader='please login'
        />
      )}
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
        <Link to='/favorites'>
          <ListItem button>
            <ListItemIcon>
              <Badge
                badgeContent={
                  favoriteIDS
                    .map((item) => item.recipeID)
                    .sort()
                    .filter((item, pos, ary) => !pos || item !== ary[pos - 1])
                    .length
                }
                color='secondary'
              >
                <FavoriteIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary='Favorites' />
          </ListItem>
        </Link>
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
      <Divider />
      <FormControlLabel
        className={classes.switch}
        control={
          <Checkbox
            checked={dark}
            onChange={handleDarkMode}
            icon={
              <Brightness4OutlinedIcon
                style={{ fontSize: 40 }}
                color='primary'
              />
            }
            checkedIcon={
              <Brightness7Icon style={{ fontSize: 40 }} color='primary' />
            }
            color='primary'
          />
        }
        label={dark ? 'Light mode' : 'Dark mode'}
        labelPlacement='bottom'
      />
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
  switch: {
    display: 'flex',
    marginTop: '5rem',
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
