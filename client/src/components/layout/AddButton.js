import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { APP_ID, APP_KEY } from '../userApi';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function AddButton() {
  const classes = useStyles();

  const [coctail, setCoctail] = useState([]);
  const [query, setQuery] = useState('chicken');

  const fetchData = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await res.json();
    setCoctail(data.hits);
    console.log(data.hits);
  };

  return (
    <div>
      <Fab color='secondary' aria-label='add' className={classes.margin}>
        <AddIcon onClick={fetchData} />
      </Fab>
      <div>Recipes</div>
    </div>
  );
}
