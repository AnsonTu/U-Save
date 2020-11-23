import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

function Navbar() {
  const classes = useStyles();
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

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
        <Tab
          icon={<HomeIcon />}
          component={Link}
          to={"/"}
          value="/"
          label="HOME"
        />
        <Tab
          icon={<ShoppingCartIcon />}
          component={Link}
          to={"/products"}
          value="/products"
          label="PRODUCTS"
        />
        <Tab
          icon={<PeopleIcon />}
          component={Link}
          to={"/customers"}
          value="/customers"
          label="CUSTOMERS"
        />
        <Tab
          icon={<MenuBookIcon />}
          component={Link}
          to={"/orders"}
          value="/orders"
          label="ORDERS"
        />
        <Tab
          icon={<LocalShippingIcon />}
          component={Link}
          to={"/suppliers"}
          value="/suppliers"
          label="SUPPLIERS"
        />
        <Tab
          icon={<LocationCityIcon />}
          component={Link}
          to={"/locations"}
          value="/locations"
          label="LOCATIONS"
        />
      </Tabs>
    </Paper>
  );
}

export default Navbar;
