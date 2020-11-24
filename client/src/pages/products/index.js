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

function Products() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  // Get all products when the page is rendered
  useEffect(() => {
    getProducts();
  }, []);

  // Get all products
  const getProducts = () => {
    getResources(`/products`, setProducts);
  };

  // Get all products that are cheaper than the average price of all products
  const getBelowAveragePrices = () => {
    getResources(`/products/below-average-prices`, setProducts);
  };

  // Get all products that belong to an existing order
  const getProductsInOrder = () => {
    getResources(`/products/products-in-orders`, setProducts);
  };

  return (
    <PageContainer>
      <h2>Products</h2>
      <AppTable tableData={products} />
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
    </PageContainer>
  );
}

export default Products;
