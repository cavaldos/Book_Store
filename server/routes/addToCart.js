const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/add-to-cart', (req, res) => {
  const { productId, quantity } = req.body;
  // TODO: Add logic to update cart with productId and quantity
  res.status(200).send('Item added to cart!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});