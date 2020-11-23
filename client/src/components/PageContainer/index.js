import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  rootContainer: {
    background: "#cfe8fc",
    minHeight: "100vh",
    maxWidth: "100vw",
    margin: "0",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
}));

const PageContainer = (props) => {
  const classes = useStyle();

  return (
    <Grid container item direction="column" className={classes.rootContainer}>
      {props.children}
    </Grid>
  );
};

export default PageContainer;
