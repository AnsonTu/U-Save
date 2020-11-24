import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import PageContainer from "../../components/PageContainer";
import AppTable from "../../components/AppTable";
import { getResources } from "../../helpers";

const useStyles = makeStyles({
  button: {
    margin: "0 20px"
  },
  divider: {
    margin: "30px"
  }
});

function Customers() {
  const classes = useStyles();
  const [customers, setCustomers] = useState([]);

  // Get all customers when the page is rendered
  useEffect(() => {
    getCustomers();
  }, []);

  // Get all customers
  const getCustomers = () => {
    getResources(`/customers`, setCustomers);
  };

  // Get all customers who have an active order
  const getActiveCustomers = () => {
    getResources(`/customers/active-customers-info`, setCustomers);
  };

  // Get all customers who ordered something in October
  const getOctoberCustomers = () => {
    getResources(`/customers/october-customers`, setCustomers);
  };

  return (
    <PageContainer>
      <h2>Customers</h2>
      <AppTable tableData={customers} />
      <Divider className={classes.divider} />
      <Grid item container alignItems="center" justify="center">
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getCustomers}
        >
          Get Customers (Default View)
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getActiveCustomers}
        >
          Get Active Customers Info (View 8)
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getOctoberCustomers}
        >
          Get October Customers (View 9)
        </Button>
      </Grid>
      <Divider className={classes.divider} />
    </PageContainer>
  );
}
export default Customers;
