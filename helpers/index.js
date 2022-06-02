const serialize = (dataBase) => ({
  productId: dataBase.product_id,
  nameProduct: dataBase.product_name,
  unitValue: dataBase.product_value_unit,
});

module.exports = serialize;
