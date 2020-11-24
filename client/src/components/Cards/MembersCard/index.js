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
          Meet the Team
        </Typography>
        <Typography className={classes.pos} color="textSecondary"></Typography>
        <Typography variant="body2" component="p">
          From Ontario Tech University:
          <br />
          Anson Tu & Kaushik Ramani conjured up this idea as they thought being
          able to focus on school, instead of having to constantly worry about
          what they could afford to eat and the type of food they were eating is
          a critical factor in academic success.
        </Typography>
      </CardContent>
    </Card>
  );
}
