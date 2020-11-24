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
          About Us
        </Typography>
        <Typography variant="h5" component="h2">
          Our Goal
        </Typography>
        <Typography className={classes.pos} color="textSecondary"></Typography>
        <Typography variant="body2" component="p">
          Every year, post-secondary students across North America are faced
          with a common issue: money. On top of having to pay for their tuition,
          post-secondary students are also responsible for paying for their own
          food and meals
          <br />
          The goal of U-Save is to provide post-secondary students with an
          online platform designed to help them obtain healthy ingredients at
          affordable prices. We want to ensure that students don’t need to
          constantly worry about what food they can eat because of financial
          issues, and can focus on studying instead.
        </Typography>
      </CardContent>
    </Card>
  );
}
