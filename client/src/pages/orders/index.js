import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import PageContainer from "../../components/PageContainer";
import AppTable from "../../components/AppTable";
import { getResources, createResource } from "../../helpers";

const useStyles = makeStyles({
  dateField: {
    maxWidth: 175,
    margin: "16px 20px 20px 0"
  },
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
  const [formInput, setFormInput] = useState({});
  const [orders, setOrders] = useState([]);
  const [customerId, setCustomerId] = useState("");
  const [orderId, setOrderId] = useState("");

  // Get all orders when the page is rendered
  useEffect(() => {
    getOrders();
  }, []);

  // Get all orders in the database
  const getOrders = () => {
    getResources(`/orders`, setOrders);
  };

  // Save the orderId
  const getOrderId = (event) => {
    setOrderId(event.target.value);
  };
  // Get order based on passed orderId
  const getOrder = () => {
    getResources(`/orders/${orderId}`, setOrders);
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

  // Save the form input
  const handleFormChange = (event) => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    });
  };
  // Create a new product and update the table
  const createProduct = (event) => {
    event.preventDefault();
    createResource(`/orders/add-order`, formInput);
    getOrders();
  };

  return (
    <PageContainer>
      <h2>Orders</h2>
      <AppTable tableData={orders} />
      <Divider className={classes.divider} />
      <Grid item container alignItems="center" justify="center">
        <form onSubmit={createProduct}>
          <TextField
            className={classes.dateField}
            name="order_date"
            type="date"
            required
            onChange={handleFormChange}
          />
          <TextField
            className={classes.dateField}
            name="shipping_date"
            type="date"
            required
            onChange={handleFormChange}
          />
          <TextField
            className={classes.textField}
            label="Product Quantity"
            name="product_quantity"
            required
            onChange={handleFormChange}
          />
          <TextField
            className={classes.textField}
            label="Customer ID"
            name="customer_id"
            required
            onChange={handleFormChange}
          />
          <TextField
            className={classes.textField}
            label="Product ID"
            name="product_id"
            required
            onChange={handleFormChange}
          />
          <Button variant="contained" size="medium" type="submit">
            Create new order
          </Button>
        </form>
      </Grid>
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
          label="Order ID"
          onChange={getOrderId}
        />
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getOrder}
        >
          Search Order
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
          Search Customer Products (View 10)
        </Button>
      </Grid>
      <Divider className={classes.divider} />
    </PageContainer>
  );
}
export default Orders;
