import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Technology
        </Typography>
        <Typography variant="h5" component="h2">
          Designed Using...
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          PERN!!
        </Typography>
        <Typography variant="body2" component="p">
          We are using the PERN stack for our project as it is a tried and
          tested method to build a successful and reliable web presence.
          <br />
          <br />
          PostgreSQL
          <br />
          Express.JS
          <br />
          React.JS
          <br />
          Node.JS
        </Typography>
      </CardContent>
    </Card>
  );
}
