const pool = require("./pool");

// Get a customer's info based on the given id
exports.getCustomer = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(
    `SELECT * FROM customer WHERE customer_id=${id}`,
    (err, results) => {
      if (err) {
        throw error;
      }

      res.status(200).json(results.rows);
    }
  );
};
