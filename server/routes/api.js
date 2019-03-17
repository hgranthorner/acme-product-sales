const router = require('express').Router()
const { Product } = require('../db').models

router.get('/products', (req, res, next) => {
  Product.findAll()
    .then(products => res.send(products))
    .catch(next)
})

router.post('/products', (req, res, next) => {
  console.log(req.body)
  Product.create(req.body.data)
    .then(product => res.send(product))
    .catch(next)
})

router.delete('/products', (req, res, next) => {
  Product.destroy({ where: { id: req.body.id } })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
