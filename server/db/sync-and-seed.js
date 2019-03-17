const faker = require('faker')
const db = require('./db')
const { Product } = require('./models')

faker.seed(100)

function makeProduct() {
  const product = {}
  product.name = faker.commerce.product()
  product.price = (Math.random() * 100).toFixed(2)
  product.discount = Math.random() < 0.5 ? (Math.random() * 100).toFixed(2) : 0
  const availabilityRandom = Math.random()
  if (availabilityRandom < 0.5) product.availability = 'instock'
  else if (availabilityRandom < 0.75) product.availability = 'backordered'
  else product.availability = 'discontinued'
  return product
}

module.exports = () => {
  return db
    .sync({ force: true })
    .then(async () => {
      const promiseArray = []
      for (let i = 0; i < 10; ++i) {
        promiseArray.push(Product.create(makeProduct()))
      }
      await Promise.all(promiseArray)
    })
    .catch(e => console.error(`Failed to seed data from syncAndSeed! Here's why: ${e}`))
}
