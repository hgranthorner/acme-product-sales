const app = require('./app')
const { syncAndSeed } = require('./db')

const port = process.env.PORT || 3000

syncAndSeed().then(() => {
  app.listen(port, () => console.log(`Listening on port ${port}...`))
})
