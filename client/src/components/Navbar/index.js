import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PeopleIcon from "@material-ui/icons/People";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

function Navbar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
      >
        <Tab icon={<HomeIcon />} label="HOME" />
        <Tab icon={<StorefrontIcon />} label="PRODUCTS" />
        <Tab icon={<ShoppingBasketIcon />} label="CART" />
        <Tab icon={<PeopleIcon />} label="CUSTOMERS" />
        <Tab icon={<MenuBookIcon />} label="ORDERS" />
        <Tab icon={<LocalShippingIcon />} label="SUPPLIERS" />
      </Tabs>
    </Paper>
  );
}

export default Navbar;
