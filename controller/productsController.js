const { productById, getAllProducts, setNewProduct, changeProduct, deleteProduct,
} = require('../service/productsServer');

const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const productByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const [product] = await productById(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const setNewProductController = async (req, res) => {
  try {
    const { nameProduct, unitValue } = req.body;

    const newProduct = await setNewProduct(nameProduct, unitValue);

    if (!newProduct) {
      return res.status(409).json({ message: 'Product already exists' });
    }
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const updateProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const { nameProduct, unitValue } = req.body;

    const [product] = await productById(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const change = await changeProduct(id, nameProduct, unitValue);

    return res.status(200).json(change);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await deleteProduct(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = {
  getAllProductsController,
  productByIdController,
  setNewProductController,
  updateProductController,
  deleteProductController,
};
