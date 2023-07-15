const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.error(error));

const app = express();

app.use(bodyParser.json());
app.use(cors());

const dataSchema = new mongoose.Schema({
    id: Number,
    name: String,
},{collection: 'test'});
  
const Data = mongoose.model('Data', dataSchema);

app.post('/api/cart', (req, res) => {
  const data = req.body;
  const newData = new Data({
    id: data.id,
    name: data.name,
  });
  newData.save()
    .then(() => {
      console.log(`Data saved to database: ${newData}`);
      res.send(`Data saved to database: ${newData}`);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error saving data to database');
    });
});

app.listen(3000, () => console.log('Server started on port 3000'));