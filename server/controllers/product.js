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

// View 4: Get all products, and see which ones belong to an existing order
exports.getProductsInOrder = (req, res) => {
  pool.query(
    `SELECT product.name, order_details.order_id FROM order_details 
    FULL OUTER JOIN product ON product.product_id=order_details.product_id
    ORDER BY product.name;`,
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
