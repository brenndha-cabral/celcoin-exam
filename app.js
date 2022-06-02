const express = require('express');
require('dotenv').config();

const productsRoutes = require('./routes/productsRoutes');

const app = express();

app.use(express.json());

app.use('/celcoin/products', productsRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});

