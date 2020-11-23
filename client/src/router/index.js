import React from "react";
import { Switch, Route } from "react-router-dom";
import Customers from "../pages/customers";
import Home from "../pages/home";
import Locations from "../pages/locations";
import Orders from "../pages/orders";
import Products from "../pages/products";
import Suppliers from "../pages/suppliers";

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/customers" component={Customers} />
      <Route path="/locations" component={Locations} />
      <Route path="/orders" component={Orders} />
      <Route path="/products" component={Products} />
      <Route path="/suppliers" component={Suppliers} />
    </Switch>
  );
};

export default AppRouter;
