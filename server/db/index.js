const models = require('./models')
const db = require('./db')
const syncAndSeed = require('./sync-and-seed')

module.exports = {
  models,
  db,
  syncAndSeed
}
