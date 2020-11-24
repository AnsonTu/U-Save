const pool = require("./pool");

// Get all suppliers in the database
exports.getSuppliers = (req, res) => {
  pool.query(`SELECT * FROM supplier ORDER BY supplier_id`, (err, results) => {
    if (err) {
      throw err;
    }

    res.status(200).json(results.rows);
  });
};

// Get a supplier's info based on the given id
exports.getSupplier = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(
    `SELECT * FROM supplier WHERE supplier_id=${id}`,
    (err, results) => {
      if (err) {
        throw err;
      }

      res.status(200).json(results.rows);
    }
  );
};

// View 2: Get the supplier ID and supplier name for suppliers that contribute more than one product
exports.getMultiProductSuppliers = (req, res) => {
  pool.query(
    `SELECT supplier.supplier_id, supplier.name FROM supplier
    WHERE supplier.supplier_id IN 
        (SELECT product.supplier_id FROM product
        WHERE product.supplier_id = supplier.supplier_id
        GROUP BY product.supplier_id
        HAVING COUNT(product.product_id) > 1)
    ORDER BY supplier.name;`,
    (err, results) => {
      if (err) {
        throw err;
      }

      res.status(200).json(results.rows);
    }
  );
};

// View 6: Get the names of all products that belong to a specific supplier
exports.getSupplierProducts = (req, res) => {
  const supplier_id = parseInt(req.params.id);

  pool.query(
    `SELECT DISTINCT product.name FROM product
    JOIN supplier ON product.supplier_id=${supplier_id}`,
    (err, results) => {
      if (err) {
        throw err;
      }

      res.status(200).json(results.rows);
    }
  );
};

// Add a new supplier
exports.addSupplier = (req, res) => {
  const { name, phone, address } = req.body;

  pool.query(
    `INSERT INTO supplier(name, phone, address) 
    VALUES('${name}', '${phone}', '${address}')
    RETURNING name, phone, address;`,
    (err, results) => {
      if (err) {
        throw err;
      }

      // Return newly created supplier
      res.status(201).send(results.rows);
    }
  );
};
