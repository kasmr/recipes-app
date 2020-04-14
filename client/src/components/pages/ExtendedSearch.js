import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '10rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '4rem',
    },
    '& > *': {
      margin: theme.spacing(1),
      width: 770,
      height: 400,
      [theme.breakpoints.down('sm')]: {
        width: '90%',
        height: 670,
      },
    },
  },
  title: {
    width: '100%',
    fontSize: '2rem',
    margin: '1rem',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 0',
    },
  },
  form: {
    margin: '1rem',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 350,
  },
  slider: {
    width: 350,
    margin: 8,
  },
  search: {
    display: 'flex',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    color: 'black',
    border: 'black 1.5px solid',
    margin: 'auto',
    width: 500,
    backgroundColor: '#fff',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      margin: '0 1.5rem',
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
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '50ch',
    },
  },
  checkbox: {
    margin: 'auto',
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const dishTypesArray = [
  'main course',
  'side dish',
  'dessert',
  'appetizer',
  'salad',
  'bread',
  'breakfast',
  'soup',
  'beverage',
  'sauce',
  'marinade',
  'fingerfood',
  'snack',
  'drink',
];

const cuisinesArray = [
  'african',
  'american',
  'british',
  'cajun',
  'caribbean',
  'chinese',
  'eastern european',
  'european',
  'french',
  'german',
  'greek',
  'indian',
  'irish',
  'italian',
  'japanese',
  'jewish',
  'korean',
  'latin emerican',
  'mediterranean',
  'mexican',
  'middle eastern',
  'nordic',
  'southern',
  'spanish',
  'thai',
  'vietnamese',
];

const dietsArray = [
  'ketogenic',
  'vegetarian',
  'vegan',
  'pescetarian',
  'paleo',
  'lacto vegetarian',
  'primal',
  'whole 30',
  'gluten Free',
];

const intolerancesArray = [
  'dairy',
  'egg',
  'grain',
  'gluten',
  'peanut',
  'seafood',
  'sesame',
  'shellfish',
  'soy',
  'sulfite',
  'wheat',
];

const ExtendedSearch = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  //cuisine
  const [cuisine, setCuisine] = React.useState('');

  const handleChange1 = (event) => {
    setCuisine(event.target.value);
  };
  //diet
  const [diet, setDiet] = React.useState('');

  const handleChange2 = (event) => {
    setDiet(event.target.value);
  };

  //dish type
  const [dishType, setDishType] = React.useState('');

  const handleChange3 = (event) => {
    setDishType(event.target.value);
  };

  //mins to make

  const [mins, setMins] = React.useState(30);

  const handleChange4 = (event, newValue) => {
    setMins(newValue);
  };

  //mins to make

  const [calories, setCalories] = React.useState(1500);

  const handleChange5 = (event, newValue) => {
    setCalories(newValue);
  };

  //intolerances
  const [intolerances, setIntolerances] = React.useState([]);

  const handleChange6 = (event) => {
    setIntolerances(event.target.value);
  };

  return (
    <form className={classes.root}>
      <Paper elevation={2} className={classes.pa}>
        <Typography
          variant='h2'
          gutterBottom
          align='center'
          className={classes.title}
        >
          EXTENDED SEARCH
        </Typography>
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
            value=''
            // onChange={onChange}
          />
        </div>
        <FormGroup row className={classes.form}>
          <FormControl className={classes.formControl}>
            <InputLabel>Country origin</InputLabel>
            <Select value={cuisine} onChange={handleChange1}>
              {cuisinesArray.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Diet</InputLabel>
            <Select value={diet} onChange={handleChange2}>
              {dietsArray.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Dish type</InputLabel>
            <Select value={dishType} onChange={handleChange3}>
              {dishTypesArray.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Intolerances</InputLabel>
            <Select
              multiple
              value={intolerances}
              onChange={handleChange6}
              input={<Input />}
              renderValue={(selected) => selected.join(',')}
              MenuProps={MenuProps}
            >
              {intolerancesArray.map((item) => (
                <MenuItem key={item} value={item}>
                  <Checkbox
                    checked={intolerances.indexOf(item) > -1}
                    color='primary'
                  />
                  <ListItemText primary={item} />
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Intolerances to exclude</FormHelperText>
          </FormControl>
          <FormControl className={classes.slider}>
            <Typography gutterBottom>Maximum time to make (min)</Typography>
            <Slider
              value={mins}
              valueLabelDisplay='auto'
              aria-labelledby='discrete-slider'
              step={10}
              marks
              min={10}
              max={180}
              onChange={handleChange4}
            />
          </FormControl>
          <FormControl className={classes.slider}>
            <Typography gutterBottom>
              Maximum calories recipe has (kcal)
            </Typography>
            <Slider
              value={calories}
              valueLabelDisplay='auto'
              aria-labelledby='discrete-slider'
              step={500}
              marks
              min={500}
              max={4000}
              onChange={handleChange5}
            />
          </FormControl>
          <FormControlLabel
            className={classes.checkbox}
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name='checkedA'
                color='primary'
              />
            }
            label='Require instructions'
          />
        </FormGroup>
      </Paper>
    </form>
  );
};

export default ExtendedSearch;
