const Sequelize = require('sequelize');

const sequelize = new Sequelize('checkout', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Orders = sequelize.define('orders', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING(20)
  },
  billingZip: {
    type: Sequelize.STRING(20)
  },
  city: {
    type: Sequelize.STRING(20)
  },
  creditCard: {
    type: Sequelize.STRING(20)
  },
  cvv: {
    type: Sequelize.STRING(20)
  },
  email: {
    type: Sequelize.STRING(20)
  },
  expiration: {
    type: Sequelize.STRING(20)
  },
  line1: {
    type: Sequelize.STRING(20)
  },
  line2: {
    type: Sequelize.STRING(20)
  },
  name: {
    type: Sequelize.STRING(20)
  },
  password: {
    type: Sequelize.STRING(20)
  },
  state: {
    type: Sequelize.STRING(20)
  },
  zip: {
    type: Sequelize.STRING(20)
  },
}, {
  timestamps: false
})

Orders.sync();

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = Orders;