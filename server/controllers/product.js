const pool = require("./pool");

// Get all products in the database
exports.getProducts = (req, res) => {
  pool.query(`SELECT * FROM product ORDER BY product_id;`, (err, results) => {
    if (err) {
      throw err;
    }

    res.status(200).json(results.rows);
  });
};

// Get a product's info based on the given id
exports.getProduct = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(
    `SELECT * FROM product WHERE product_id=${id};`,
    (err, results) => {
      if (err) {
        throw err;
      }

      res.status(200).json(results.rows);
    }
  );
};

// View 3: Get all ingredients where their price is less than the average price of all existing products
exports.getBelowAveragePrices = (req, res) => {
  pool.query(
    `SELECT name, price FROM product 
    WHERE price < (SELECT AVG(price) FROM product);`,
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

// Add a new product
exports.addProduct = (req, res) => {
  const { name, quantity, price, supplier_id } = req.body;

  pool.query(
    `INSERT INTO product(name, quantity, price, supplier_id) 
    VALUES('${name}', '${quantity}', ${price}, ${supplier_id})`,
    (err, results) => {
      if (err) {
        throw err;
      }

      // Return the added product
      res.status(201).json(req.body);
    }
  );
};
