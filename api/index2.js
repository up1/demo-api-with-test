const db = require('./db')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World 3')
})

app.get('/products', async (req, res) => {
  try {
    const results = await db.getProductPrices();
    return res.json(results);
  } catch (e) {
    console.log(e);
    return res.status(500).json(e);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})