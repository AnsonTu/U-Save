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

function Customers() {
  const classes = useStyles();
  const [formInput, setFormInput] = useState({});
  const [customers, setCustomers] = useState([]);
  const [customerId, setCustomerId] = useState("");

  // Get all customers when the page is rendered
  useEffect(() => {
    getCustomers();
  }, []);

  // Get all customers
  const getCustomers = () => {
    getResources(`/customers`, setCustomers);
  };

  // Save the customerId
  const getCustomerId = (event) => {
    setCustomerId(event.target.value);
  };
  // Get customer based on passed customerId
  const getCustomer = () => {
    getResources(`/customers/${customerId}`, setCustomers);
  };

  // Get all customers who have an active order
  const getActiveCustomers = () => {
    getResources(`/customers/active-customers-info`, setCustomers);
  };

  // Get all customers who ordered something in October
  const getOctoberCustomers = () => {
    getResources(`/customers/october-customers`, setCustomers);
  };

  // Save the form input
  const handleFormChange = (event) => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    });
  };
  // Create a new customer and update the table
  const createCustomer = (event) => {
    event.preventDefault();
    createResource(`/customers/add-customer`, formInput);
    getCustomers();
  };

  return (
    <PageContainer>
      <h2>Customers</h2>
      <AppTable tableData={customers} />
      <Divider className={classes.divider} />
      <Grid item container alignItems="center" justify="center">
        <form onSubmit={createCustomer}>
          <TextField
            className={classes.textField}
            label="Name"
            name="name"
            required
            onChange={handleFormChange}
          />
          <TextField
            className={classes.textField}
            label="Phone"
            name="phone"
            required
            onChange={handleFormChange}
          />
          <TextField
            className={classes.textField}
            label="Email"
            name="email"
            required
            onChange={handleFormChange}
          />
          <TextField
            className={classes.textField}
            label="Address"
            name="address"
            required
            onChange={handleFormChange}
          />
          <Button variant="contained" size="medium" type="submit">
            Create new customer
          </Button>
        </form>
      </Grid>
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
          onClick={getCustomer}
        >
          Search Customer
        </Button>
      </Grid>
      <Divider className={classes.divider} />
    </PageContainer>
  );
}
export default Customers;
