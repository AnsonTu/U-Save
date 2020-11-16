const pool = require("./pool");

// Get all customers in the database
exports.getCustomers = (req, res) => {
  pool.query(`SELECT * FROM customer`, (err, results) => {
    if (err) {
      throw err;
    }

    res.status(200).json(results.rows);
  });
};

// Get a customer's info based on the given id
exports.getCustomer = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(
    `SELECT * FROM customer WHERE customer_id=${id}`,
    (err, results) => {
      if (err) {
        throw err;
      }

      res.status(200).json(results.rows);
    }
  );
};
