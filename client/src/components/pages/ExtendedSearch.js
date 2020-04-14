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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '5rem',
    '& > *': {
      margin: theme.spacing(1),
      width: '80%',
      height: 500,
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
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

function valuetext(value) {
  return `${value}`;
}

export default function SimplePaper() {
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

  //diet
  const [dishType, setDishType] = React.useState('');

  const handleChange3 = (event) => {
    setDishType(event.target.value);
  };

  //mins to make

  const [mins, setMins] = React.useState(30);

  const handleChange4 = (event, newValue) => {
    setMins(newValue);
  };

  //intolerances
  const [intolerances, setIntolerances] = React.useState([]);

  const handleChange6 = (event) => {
    setIntolerances(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Paper elevation={2}>
        <FormGroup row className={classes.form}>
          <FormControl className={classes.formControl}>
            <InputLabel id='demo-simple-select-helper-label'>
              Country origin
            </InputLabel>
            <Select value={cuisine} onChange={handleChange1}>
              {cuisinesArray.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id='demo-simple-select-helper-label'>Diet</InputLabel>
            <Select value={diet} onChange={handleChange2}>
              {dietsArray.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id='demo-simple-select-helper-label'>
              Dish type
            </InputLabel>
            <Select value={dishType} onChange={handleChange3}>
              {dishTypesArray.map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id='demo-mutiple-checkbox-label'>
              Intolerances
            </InputLabel>
            <Select
              labelId='demo-mutiple-checkbox-label'
              id='demo-mutiple-checkbox'
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
            <Typography id='discrete-slider' gutterBottom>
              Maximal time to make (min)
            </Typography>
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
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                onChange={handleChange}
                name='checkedA'
                color='primary'
              />
            }
            label='Primary'
          />
          <FormControlLabel
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
    </div>
  );
}
