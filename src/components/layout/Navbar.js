import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Panel from './Panel';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: 'none',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: '11rem',
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginLeft: 0
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}));

const Navbar = () => {
  const classes = useStyles();

  const [search, setSearch] = useState({
    query: '',
    redirect: false
  });

  const onFormSubmit = e => {
    e.preventDefault();
  };

  const onChange = e => {
    setSearch({ query: e.target.value });
  };

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Panel />
          <form onSubmit={onFormSubmit}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'search' }}
                type='text'
                value={search.query}
                onChange={onChange}
              />
            </div>
          </form>
          <Link to='/'>
            <Typography className={classes.title} variant='h4' noWrap>
              Recipe App <MenuBookRoundedIcon style={{ fontSize: '2rem' }} />
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
