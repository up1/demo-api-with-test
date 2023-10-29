const {createServer} = require('./app')
const db = require('./db')
const port = 3000

const app = createServer(db)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})