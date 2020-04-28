import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setQuery } from '../../redux/actions';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Panel from './Panel';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';

const Navbar = ({
  setQuery,
  isAuthenticated,
  location,
  dark,
  handleDarkMode,
}) => {
  const classes = useStyles();

  const { pathname } = location;

  const [value, setValue] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();
    setQuery(value);
    setValue('');
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };
  if (pathname === '/extended-search') {
    return (
      <div className={classes.root}>
        <AppBar position='fixed'>
          <Toolbar style={{ justifyContent: 'space-between' }}>
            <Panel dark={dark} handleDarkMode={handleDarkMode} />

            <Link to='/' className={classes.logo}>
              <Typography className={classes.title} variant='h4' noWrap>
                Recipe App
              </Typography>
              <MenuBookRoundedIcon className={classes.mainIcon} />
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  // if (!isAuthenticated) {
  //   return (
  //     <div className={classes.root}>
  //       <AppBar position='fixed'>
  //         <Toolbar>
  //           <Typography
  //             className={classes.title2}
  //             variant='h4'
  //             noWrap
  //             align='center'
  //           >
  //             Recipe App <MenuBookRoundedIcon style={{ fontSize: '2rem' }} />
  //           </Typography>
  //         </Toolbar>
  //       </AppBar>
  //     </div>
  //   );
  // } else
  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Panel dark={dark} handleDarkMode={handleDarkMode} />
          <form onSubmit={onFormSubmit}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                type='text'
                value={value}
                onChange={onChange}
                required
              />
            </div>
          </form>

          <Link to='/' className={classes.logo}>
            <Typography className={classes.title} variant='h4' noWrap>
              Recipe App
            </Typography>
            <MenuBookRoundedIcon className={classes.mainIcon} />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  setQuery: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default withRouter(connect(mapStateToProps, { setQuery })(Navbar));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  title2: {
    flexGrow: 1,
    display: 'block',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  mainIcon: {
    margin: 'auto',
    display: 'flex',
    fontSize: '3rem',
  },
  logo: {
    display: 'flex',
    color: '#fff',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: '11.5rem',
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginLeft: 0,
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '12ch',
    '&:focus': {
      width: '16ch',
    },
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));
