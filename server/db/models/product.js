const db = require('../db')

const availabilityEnum = {
  instock: 0,
  backordered: 1,
  discontinued: 2
}

const Product = db.define(
  'product',
  {
    name: {
      type: db.Sequelize.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    price: {
      type: db.Sequelize.FLOAT,
      allowNull: false,
      get() {
        const price = this.getDataValue('price')
        return '$' + price.toFixed(2).toString()
      }
    },
    discount: {
      type: db.Sequelize.FLOAT,
      set(discount) {
        this.setDataValue('discount', discount / 100 === 0 ? null : discount / 100)
      }
    },
    availability: {
      type: db.Sequelize.INTEGER,
      allowNull: false,
      get() {
        const availability = this.getDataValue('availability')
        return Object.keys(availabilityEnum)[availability]
      },
      validate: {
        min: 0,
        max: 2
      }
    },
    discountedPrice: {
      type: db.Sequelize.VIRTUAL,
      get() {
        return '$' + (this.getDataValue('price') - this.getDataValue('price') * this.getDataValue('discount')).toFixed(2).toString()
      }
    }
  },
  {
    hooks: {
      beforeValidate: product => {
        product.dataValues.availability = availabilityEnum[product.dataValues.availability]
      }
    }
  }
)

module.exports = Product
