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

function Products() {
  const classes = useStyles();
  const [formInput, setFormInput] = useState({});
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState("");

  // Get all products when the page is rendered
  useEffect(() => {
    getProducts();
  }, []);

  // Get all products
  const getProducts = () => {
    getResources(`/products`, setProducts);
  };

  // Save the productId
  const getProductId = (event) => {
    setProductId(event.target.value);
  };
  // Get product based on passed productId
  const getProduct = () => {
    getResources(`/products/${productId}`, setProducts);
  };

  // Get all products that are cheaper than the average price of all products
  const getBelowAveragePrices = () => {
    getResources(`/products/below-average-prices`, setProducts);
  };

  // Get all products that belong to an existing order
  const getProductsInOrder = () => {
    getResources(`/products/products-in-orders`, setProducts);
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
    createResource(`/products/add-product`, formInput);
    getProducts();
  };

  return (
    <PageContainer>
      <h2>Products</h2>
      <AppTable tableData={products} />
      <Divider className={classes.divider} />
      <Grid item container alignItems="center" justify="center">
        <form onSubmit={createProduct}>
          <TextField
            className={classes.textField}
            label="Name"
            name="name"
            required
            onChange={handleFormChange}
          />
          <TextField
            className={classes.textField}
            label="Quantity"
            name="quantity"
            required
            onChange={handleFormChange}
          />
          <TextField
            className={classes.textField}
            label="Price"
            name="price"
            required
            onChange={handleFormChange}
          />
          <TextField
            className={classes.textField}
            label="Supplier ID"
            name="supplier_id"
            required
            onChange={handleFormChange}
          />
          <Button variant="contained" size="medium" type="submit">
            Create new product
          </Button>
        </form>
      </Grid>
      <Divider className={classes.divider} />
      <Grid item container alignItems="center" justify="center">
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getProducts}
        >
          Get Products (Default View)
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getBelowAveragePrices}
        >
          Get Products of below-average price (View 3)
        </Button>
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getProductsInOrder}
        >
          Get Products in Existing Orders (View 4)
        </Button>
      </Grid>
      <Divider className={classes.divider} />
      <Grid item container alignItems="center" justify="center">
        <TextField
          className={classes.textField}
          label="Product ID"
          onChange={getProductId}
        />
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          onClick={getProduct}
        >
          Search Product
        </Button>
      </Grid>
      <Divider className={classes.divider} />
    </PageContainer>
  );
}

export default Products;
