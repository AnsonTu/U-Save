import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";

const Cart = lazy(() => import("../pages/cart"));
const Customers = lazy(() => import("../pages/customers"));
const Home = lazy(() => import("../pages/home"));
const Orders = lazy(() => import("../pages/orders"));
const Shop = lazy(() => import("../pages/shop"));
const Suppliers = lazy(() => import("../pages/suppliers"));

const AppRouter = () => {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/customers" component={Customers} />
        <Route path="/orders" component={Orders} />
        <Route path="/shop" component={Shop} />
        <Route path="/suppliers" component={Suppliers} />
      </Switch>
    </Suspense>
  );
};

export default AppRouter;
