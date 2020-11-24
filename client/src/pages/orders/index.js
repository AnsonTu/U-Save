import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import PageContainer from "../../components/PageContainer";
import AppTable from "../../components/AppTable";
import { getResources } from "../../helpers";

const useStyles = makeStyles({
  textField: {
    maxWidth: 175,
    marginRight: "20px",
    marginBottom: "20px"
  },
  button: {
    margin: "0 20px"
  },
  divider: {
    margin: "30px"
  }
});

function Orders() {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const [customerId, setCustomerId] = useState("");

  // Get all orders when the page is rendered
  useEffect(() => {
    getOrders();
  }, []);

  // Get all orders in the database
  const getOrders = () => {
    getResources(`/orders`, setOrders);
  };

  // Get the customer name, product name, and product quantity for all orders
  const getFullOrderInfo = () => {
    getResources(`/orders/full-order-info`, setOrders);
  };

  // Save the inputted customerId
  const getCustomerId = (event) => {
    setCustomerId(event.target.value);
  };
  // Get order and shipping dates for all orders that belong to a customer
  const getOrderDates = () => {
    if (customerId) {
      getResources(`/orders/customer-order-dates/${customerId}`, setOrders);
    }
  };
  // Get all products a customer has ordered
  const getCustomerProducts = () => {
    if (customerId) {
      getResources(`/orders/products-from-orders/${customerId}`, setOrders);
    }
  };

  return (
    <PageContainer>
      <h2>Orders</h2>
      <AppTable tableData={orders} />
      <Divider className={classes.divider} />
      <Grid item container alignItems="center" justify="center">
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getOrders}
        >
          Get Orders (Default View)
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getFullOrderInfo}
        >
          Get Full Order Info (View 1)
        </Button>
      </Grid>
      <Divider className={classes.divider} />
      <Grid item container alignItems="center" justify="center">
        <TextField
          className={classes.textField}
          label="Customer ID"
          onChange={getCustomerId}
        />
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getOrderDates}
        >
          Get Order Dates (View 7)
        </Button>
        <Button variant="contained" size="medium" onClick={getCustomerProducts}>
          Search Customer (View 10)
        </Button>
      </Grid>
      <Divider className={classes.divider} />
    </PageContainer>
  );
}
export default Orders;
