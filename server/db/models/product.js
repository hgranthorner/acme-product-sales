const db = require('../db-cnxn')

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
        const discount = this.getDataValue('discount')
        const discPrice = (price - price * discount, 2).toFixed(2)
        return '$' + discPrice.toString()
      }
    },
    discount: {
      type: db.Sequelize.FLOAT,
      set() {
        const discount = this.getDataValue('discount')
        return discount / 100
      }
    },
    availability: {
      type: db.Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    hooks: {
      beforeValidate: product => {
        product.availability = availabilityEnum[product.availability]
      }
    }
  }
)

module.exports = Product
