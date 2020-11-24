import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
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

function Suppliers() {
  const classes = useStyles();
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

  return (
    <PageContainer>
      <h2>Suppliers</h2>
      <AppTable tableData={suppliers} />
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
        <Button variant="contained" size="small" onClick={getSupplierProducts}>
          Get Products from supplier (View 6)
        </Button>
      </Grid>
      <Divider className={classes.divider} />
    </PageContainer>
  );
}
export default Suppliers;
