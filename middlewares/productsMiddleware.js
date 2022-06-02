const validateNameProduct = async (req, res, next) => {
  const { nameProduct } = req.body;

  if (!nameProduct) {
    return res.status(400).json({ message: '"nameProduct" is required' });
  }

  if (nameProduct.length < 5) {
    return res.status(422).json({ message: '"nameProduct" length must be at least 5 characters long' });
  }

 return next();
};

const validateQuantityProduct = async (req, res, next) => {
  const { unitValue } = req.body;

  if (unitValue === undefined) {
    return res.status(400).json({ message: '"valueUnit" is required' });
  }

  if (unitValue <= 0) {
    return res.status(422).json({ message: '"valueUnit" must be greater than or equal to 1' });
  }

 return next();
};

module.exports = {
  validateNameProduct,
  validateQuantityProduct,
};
