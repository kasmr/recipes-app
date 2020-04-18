import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  title: {
    margin: '2rem 0',
  },
  table: {
    minWidth: 300,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const RecipeTable = ({ recipe }) => {
  const classes = useStyles();

  const { extendedIngredients } = recipe;
  return (
    <>
      <Typography
        variant='h5'
        className={classes.title}
        justify='center'
        align='center'
      >
        Ingredients:
      </Typography>
      <TableContainer
        component={Paper}
        className={classes.TableContainer}
        style={{ marginBottom: '2rem' }}
      >
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Ingredient</StyledTableCell>
              <StyledTableCell align='right'>Amount</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {extendedIngredients &&
              extendedIngredients.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component='th' scope='row'>
                    <p>{row.originalName}</p>
                    <img
                      alt='ingredient'
                      src={` https://spoonacular.com/cdn/ingredients_100x100/${row.image}`}
                    />
                  </TableCell>
                  <TableCell align='right'>
                    {Object.values(row.measures.metric)[0] +
                      ' ' +
                      Object.values(row.measures.metric)[2]}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RecipeTable;
