const connection = require('../database/connection');
const serialize = require('../helpers');

const getAll = async () => {
  const QUERY = 'SELECT product_id, product_name, product_value_unit FROM products ORDER BY product_id';

  const [response] = await connection.execute(QUERY);

  return response.map(serialize);
};

const findProductById = async (id) => {
  const QUERY = 'SELECT product_id, product_name, product_value_unit FROM products WHERE product_id = ?';

  const [response] = await connection.execute(QUERY, [id]);

  return response.map(serialize);
};

const findProductByName = async (nameProduct) => {
  const QUERY = 'SELECT product_name FROM products WHERE product_name = ?';

  const [response] = await connection.execute(QUERY, [nameProduct]);

  return response.map(serialize);
};

const createNewProduct = (nameProduct, unitValue) => {
  const QUERY = 'INSERT INTO products (product_name, product_value_unit) VALUES (?,?)';

  return connection.execute(QUERY, [nameProduct, unitValue]);
};

const updateProduct = (productId, nameProduct, unitValue) => {
  const QUERY = 'UPDATE products SET product_name = ?, product_value_unit = ? WHERE product_id = ?';

  return connection.execute(QUERY, [nameProduct, unitValue, productId]);
};

const removeProduct = async (productId) => {
  const QUERY = 'DELETE FROM products WHERE product_id = ?';

  const [response] = await connection.execute(QUERY, [productId]);

  return response.affectedRows;
};

module.exports = {
  getAll,
  findProductById,
  findProductByName,
  createNewProduct,
  updateProduct,
  removeProduct,
};
