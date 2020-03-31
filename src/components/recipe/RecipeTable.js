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
    margin: '2rem 0'
  },
  table: {
    minWidth: 650
  }
});

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const RecipeTable = ({ recipe }) => {
  const classes = useStyles();

  return (
    <>
      <Typography
        variant='h5'
        className={classes.title}
        justify='center'
        align='center'
      >
        Nutrients contained:
      </Typography>
      <TableContainer component={Paper} style={{ marginBottom: '2rem' }}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Nutrients</StyledTableCell>
              <StyledTableCell align='right'>Total</StyledTableCell>
              <StyledTableCell align='right'>Daily amount</StyledTableCell>
              <StyledTableCell align='right'>Unit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recipe.digest.map(row => (
              <TableRow key={row.tag}>
                <TableCell component='th' scope='row'>
                  {row.label}
                </TableCell>
                <TableCell align='right'>{Math.round(row.total)}</TableCell>
                <TableCell align='right'>{Math.round(row.daily)}</TableCell>
                <TableCell align='right'>{row.unit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default RecipeTable;
