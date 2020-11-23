import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  tableContainer: { maxHeight: 650, maxWidth: 1200 },
  table: {
    minWidth: 700
  },
  header: {
    textTransform: "capitalize"
  }
});

export default function AppTable(props) {
  const { tableData } = props;
  const classes = useStyles();
  const tableHeaders = tableData[0] && Object.keys(tableData[0]);
  const formattedHeaders =
    tableHeaders && tableHeaders.map((header) => header.replace("_", " "));
  const tableRows = [];
  tableData.forEach((row, idx) => {
    tableRows[idx] = row;
  });

  return (
    <Grid item container justify="center">
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table stickyHeader className={classes.table} aria-label="AppTable">
          <TableHead>
            <TableRow>
              {formattedHeaders &&
                formattedHeaders.map((header) => (
                  <TableCell
                    className={classes.header}
                    key={header}
                  >{`${header}`}</TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row, idx) => (
              <TableRow key={`${row}=${idx}`}>
                {tableHeaders.map((col) => (
                  <TableCell
                    key={`${col}-${idx}`}
                  >{`${tableRows[idx][col]}`}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}
