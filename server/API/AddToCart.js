const MyModel = require('./BookSchema')

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/Book', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.error(error));

const app = express();

app.use(bodyParser.json());
app.use(cors());

const dataSchema = new mongoose.Schema({
    id: Number,
    name: String,
    url: String,
    quantity: Number,
},{collection: 'cart'});
  
const Data = mongoose.model('Data', dataSchema);

app.post('/api/cart', (req, res) => {
  const data = req.body;
  const newData = new Data({
    id: data.ID,
    name: data.Tittle,
    url: data.Image,
    quantity: 1,
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

////Get database of book 
app.get('/data', async (req,res)=>
{
  try {
    const data = await MyModel.find();
    res.json(data);}
  catch(error)
  {
    console.error(error);
    res.status(500).send('Internal server error');
  }
})

app.listen(3000, () => console.log('Server started on portcls 3000'));