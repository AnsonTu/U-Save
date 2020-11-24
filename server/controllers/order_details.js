const pool = require("./pool");

// Get all orders in the database
exports.getOrders = (req, res) => {
  pool.query(
    `SELECT * FROM order_details ORDER BY order_id;`,
    (err, results) => {
      if (err) {
        throw err;
      }

      res.status(200).json(results.rows);
    }
  );
};

// Get an order's info based on the given id
exports.getOrder = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(
    `SELECT * FROM order_details WHERE order_id=${id};`,
    (err, results) => {
      if (err) {
        throw err;
      }

      res.status(200).json(results.rows);
    }
  );
};

// View 1: Get the customer name, product name, and product quantity for all orders
exports.getFullOrderInfo = (req, res) => {
  pool.query(
    `SELECT customer.name as customer_name, product.name, order_details.product_quantity FROM order_details
        JOIN customer ON order_details.customer_id=customer.customer_id 
        JOIN product ON order_details.product_id=product.product_id;`,
    (err, results) => {
      if (err) {
        throw err;
      }

      res.status(200).json(results.rows);
    }
  );
};

// View 7: Get the order ID, order dates, and shipping dates for all of a customer's orders
exports.getCustomerOrderDates = (req, res) => {
  const customer_id = parseInt(req.params.id);

  pool.query(
    `SELECT DISTINCT order_id, order_date, shipping_date FROM order_details
    JOIN customer ON order_details.customer_id=${customer_id}`,
    (err, results) => {
      if (err) {
        throw err;
      }

      res.status(200).json(results.rows);
    }
  );
};

// View 10: Get the products from all of a customer's orders
exports.getProductsFromOrders = (req, res) => {
  const customer_id = parseInt(req.params.id);

  pool.query(
    `SELECT product.name, product_quantity FROM order_details
    JOIN product on product.product_id=order_details.product_id
    WHERE customer_id=${customer_id}`,
    (err, results) => {
      if (err) {
        throw err;
      }

      res.status(200).json(results.rows);
    }
  );
};

// Add a new order
exports.addOrder = (req, res) => {
  const {
    order_date,
    shipping_date,
    product_quantity,
    customer_id,
    product_id
  } = req.body;

  pool.query(
    `SELECT quantity FROM product WHERE product_id=${product_id}`,
    (err, results) => {
      if (err) {
        throw err;
      }

      // Check if the order's quantity can be matched
      if (product_quantity <= results.rows[0].quantity) {
        pool.query(
          `INSERT INTO order_details(order_date, shipping_date, product_quantity, customer_id, product_id) 
          VALUES('${order_date}', '${shipping_date}', ${product_quantity}, ${customer_id}, ${product_id});`,
          (err, results) => {
            if (err) {
              throw err;
            }

            // Return newly created order
            res.status(201).json(req.body);
          }
        );
      } else {
        res.status(400).json(`Product quantity exceeded`);
      }
    }
  );
};
