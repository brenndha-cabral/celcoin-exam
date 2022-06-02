const { findProductById, getAll, findProductByName, createNewProduct, updateProduct, removeProduct,
} = require('../model/productModel');

const getAllProducts = () => getAll();

const productById = (productId = null) => {
  if (productId) {
    return findProductById(productId);
  }
};

const setNewProduct = async (nameProduct, unitValue) => {
  const getProduct = await findProductByName(nameProduct);

  if (getProduct.length !== 0) return null;

  const [product] = await createNewProduct(nameProduct, unitValue);
  return ({
    productId: product.insertId,
    nameProduct,
    unitValue,
  });
};

const changeProduct = async (productId, nameProduct, unitValue) => {
  await updateProduct(productId, nameProduct, unitValue);

  return ({
    productId,
    nameProduct,
    unitValue,
  });
};

const deleteProduct = (productId = null) => {
  if (productId) {
    return removeProduct(productId);
  }
};

module.exports = {
  getAllProducts,
  productById,
  setNewProduct,
  changeProduct,
  deleteProduct,
};
