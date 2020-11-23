const customer = require("./controllers/customer");
const order = require("./controllers/order_details");
const product = require("./controllers/product");
const supplier = require("./controllers/supplier");

module.exports = (app) => {
  // Route for checking server status
  app.get("/", (req, res) => {
    res.send({ server_status: "Online" });
  });
  // Routes for the customer table
  app.get("/customers", customer.getCustomers);
  app.get("/customers/geographic-info", customer.getGeographicInfo);
  app.get("/customers/active-customers-info", customer.getActiveCustomersInfo);
  app.get("/customers/october-customers", customer.getOctoberCustomers);
  app.get("/customers/:id", customer.getCustomer);
  app.post("/customers/add-customer", customer.addCustomer);
  // Routes for the order_details table
  app.get("/orders", order.getOrders);
  app.get("/orders/full-order-info", order.getFullOrderInfo);
  app.get("/orders/products-in-orders", order.getProductsInOrder);
  app.get("/orders/customer-order-dates/:id", order.getCustomerOrderDates);
  app.get("/orders/products-from-orders/:id", order.getProductsFromOrders);
  app.get("/orders/:id", order.getOrder);
  app.post("/orders/add-order", order.addOrder);
  // Routes for the product table
  app.get("/products", product.getProducts);
  app.get("/products/below-average-prices", product.getBelowAveragePrices);
  app.get("/products/supplier-products/:id", product.getSupplierProducts);
  app.get("/products/:id", product.getProduct);
  app.post("/products/add-product", product.addProduct);
  // Routes for the supplier table
  app.get("/suppliers", supplier.getSuppliers);
  app.get(
    "/suppliers/multi-product-suppliers",
    supplier.getMultiProductSuppliers
  );
  app.get("/suppliers/:id", supplier.getSupplier);
  app.post("/suppliers/add-supplier", supplier.addSupplier);
};
