const express = require('express')

function createServer (database) {
  const app = express()

  app.use(express.json())
  app.get('/', (req, res) => {
    res.send('Hello World 3')
  })
  
  app.get('/products', async (req, res) => {
    try {
      const results = await database.getProductPrices();
      return res.json(results);
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  })
  return app
}

module.exports = {
    createServer
}