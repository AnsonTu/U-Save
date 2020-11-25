import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
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

function Suppliers() {
  const classes = useStyles();
  const [formInput, setFormInput] = useState({});
  const [suppliers, setSuppliers] = useState([]);
  const [supplierId, setSupplierId] = useState("");

  // Get all suppliers when the page is rendered
  useEffect(() => {
    getSuppliers();
  }, []);

  // Get all suppliers
  const getSuppliers = () => {
    getResources(`/suppliers`, setSuppliers);
  };

  // Get supplier based on passed supplierId
  const getSupplier = () => {
    getResources(`/suppliers/${supplierId}`, setSuppliers);
  };

  // Get all suppliers who contributed more than one product
  const getMultiProductSuppliers = () => {
    getResources(`/suppliers/multi-product-suppliers`, setSuppliers);
  };

  // Save the supplierId
  const getSupplierId = (event) => {
    setSupplierId(event.target.value);
  };
  // Get the names of products that belong to the specified supplier
  const getSupplierProducts = () => {
    if (supplierId) {
      getResources(`/suppliers/supplier-products/${supplierId}`, setSuppliers);
    }
  };

  // Save the form input
  const handleFormChange = (event) => {
    setFormInput({
      ...formInput,
      [event.target.name]: event.target.value
    });
  };
  // Create a new supplier and update the table
  const createSupplier = (event) => {
    event.preventDefault();
    createResource(`/suppliers/add-supplier`, formInput);
    getSuppliers();
  };

  return (
    <PageContainer>
      <h2>Suppliers</h2>
      <AppTable tableData={suppliers} />
      <Divider className={classes.divider} />
      <Grid item container alignItems="center" justify="center">
        <form onSubmit={createSupplier}>
          <TextField
            className={classes.textField}
            label="Name"
            name="name"
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
          <TextField
            className={classes.textField}
            label="Phone"
            name="phone"
            required
            onChange={handleFormChange}
          />
          <Button variant="contained" size="medium" type="submit">
            Create new supplier
          </Button>
        </form>
      </Grid>
      <Divider className={classes.divider} />
      <Grid item container alignItems="center" justify="center">
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getSuppliers}
        >
          Get Suppliers (Default View)
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getMultiProductSuppliers}
        >
          Load Multi-Product Suppliers (View 2)
        </Button>
      </Grid>
      <Divider className={classes.divider} />
      <Grid item container alignItems="center" justify="center">
        <TextField
          className={classes.textField}
          label="Supplier ID"
          onChange={getSupplierId}
        />
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getSupplier}
        >
          Search Supplier
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getSupplierProducts}
        >
          Get Products from supplier (View 6)
        </Button>
      </Grid>
      <Divider className={classes.divider} />
    </PageContainer>
  );
}
export default Suppliers;
