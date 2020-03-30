import React, { useEffect, useState } from 'react';
import { APP_ID, APP_KEY } from '../userApi';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RecipeDivider from './RecipeDivider';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const Recipe = match => {
  const [currentRecipe, setCurrentRecipe] = useState([]);

  const passedTitle = match.match.params.title;
  const passedSource = match.match.params.source;

  useEffect(() => {
    fetchData();

    //eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${passedTitle}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await res.json();
    console.log(data.hits);
    setCurrentRecipe(data.hits);
  };

  const classes = useStyles();

  return (
    <div>
      {currentRecipe
        .filter(r => r.recipe.source === passedSource)
        .map(r => (
          <div key={r.recipe.uri}>
            <h1>{r.recipe.label}</h1>
            <h4>{r.recipe.source}</h4>
            <img src={r.recipe.image} alt='' />
            <h4>{r.recipe.dietLabels}</h4>
            <h4>{r.recipe.healthLabels}</h4>
            <h4>{r.recipe.calories}</h4>
            <h4>{r.recipe.totalWeight}</h4>
            <h4>{r.recipe.totalTime}</h4>
            <RecipeDivider />
            <div>
              {r.recipe.ingredients.map((i, index) => (
                <p key={index}>
                  {i.text} weight {i.weight}
                </p>
              ))}
            </div>
            <div>
              <TableContainer
                component={Paper}
                style={{ marginBottom: '2rem' }}
              >
                <Table className={classes.table} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nutrients</TableCell>
                      <TableCell align='right'>Total</TableCell>
                      <TableCell align='right'>Daily amount</TableCell>
                      <TableCell align='right'>Unit</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {r.recipe.digest.map(row => (
                      <TableRow key={row.tag}>
                        <TableCell component='th' scope='row'>
                          {row.label}
                        </TableCell>
                        <TableCell align='right'>
                          {Math.round(row.total)}
                        </TableCell>
                        <TableCell align='right'>
                          {Math.round(row.daily)}
                        </TableCell>
                        <TableCell align='right'>{row.unit}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Recipe;
