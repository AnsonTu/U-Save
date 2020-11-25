import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  card: {
    width: "768px",
    marginBottom: "12px"
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Card className={classes.card}>
        <CardContent>{props.children}</CardContent>
      </Card>
    </Grid>
  );
}
