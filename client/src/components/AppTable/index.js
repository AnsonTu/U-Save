import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

//TODO:delete after testing
function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
  test1,
  test2,
  test3,
  test4
) {
  return { name, calories, fat, carbs, protein, test1, test2, test3, test4 };
}

//TODO:delete after testing
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData(
    "Gingerbread",
    356,
    16.0,
    49,
    3.9,
    3.9,
    3.9,
    3900000000000000000000000000
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    49,
    3.9,
    3.9,
    3.9,
    3900000000000000000000000000
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    49,
    3.9,
    3.9,
    3.9,
    3900000000000000000000000000
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    49,
    3.9,
    3.9,
    3.9,
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB",
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    49,
    3.9,
    3.9,
    3.9,
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB",
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    49,
    3.9,
    3.9,
    3.9,
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB",
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB"
  ),
  createData(
    "Gingerbread",
    356,
    16.0,
    49,
    3.9,
    3.9,
    3.9,
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB",
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB"
  ),
  createData(
    "Ice Cream Sandwich ",
    356,
    16.0,
    49,
    3.9,
    3.9,
    3.9,
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB",
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB"
  ),
  createData(
    "Honeycomb",
    356,
    16.0,
    49,
    3.9,
    3.9,
    3.9,
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB",
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB"
  ),
  createData(
    "JellyBean",
    356,
    16.0,
    49,
    3.9,
    3.9,
    3.9,
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB",
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB"
  ),
  createData(
    "JellyBean",
    356,
    16.0,
    49,
    3.9,
    3.9,
    3.9,
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB",
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB"
  ),
  createData(
    "KitKat",
    356,
    16.0,
    49,
    3.9,
    3.9,
    3.9,
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB",
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB"
  ),
  createData(
    "Lolipop",
    356,
    16.0,
    49,
    3.9,
    3.9,
    3.9,
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB",
    "1234 Queen St, Downtown Toronto, Ontario, L1A3FB"
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function AppTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="AppTable">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">test1</TableCell>
            <TableCell align="right">test2</TableCell>
            <TableCell align="right">test3</TableCell>
            <TableCell align="right">test4</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.test1}</TableCell>
              <TableCell align="right">{row.test2}</TableCell>
              <TableCell align="right">{row.test3}</TableCell>
              <TableCell align="right">{row.test4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
