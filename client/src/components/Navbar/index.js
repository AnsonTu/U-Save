import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import PeopleIcon from "@material-ui/icons/People";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { Link } from "react-router-dom";

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
        <Tab icon={<HomeIcon />} component={Link} to={"/"} label="HOME" />
        <Tab
          icon={<ShoppingCartIcon />}
          component={Link}
          to={"/products"}
          label="PRODUCTS"
        />
        <Tab
          icon={<ShoppingBasketIcon />}
          component={Link}
          to={"/cart"}
          label="CART"
        />
        <Tab
          icon={<PeopleIcon />}
          component={Link}
          to={"/customers"}
          label="CUSTOMERS"
        />
        <Tab
          icon={<MenuBookIcon />}
          component={Link}
          to={"/orders"}
          label="ORDERS"
        />
        <Tab
          icon={<LocalShippingIcon />}
          component={Link}
          to={"/suppliers"}
          label="SUPPLIERS"
        />
      </Tabs>
    </Paper>
  );
}

export default Navbar;
