const customer = require("./controllers/customer");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send({ server_status: "Online" });
  });
  app.get("/customer", customer.getCustomers);
  app.get("/customer/:id", customer.getCustomer);
};
