require('dotenv').config();
import Sequelize from 'sequelize';
console.log("ssssssss");
const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: 1433,
  dialect: process.env.DB_DIALECT,
  options: {
      timestamps: false,
  }
});

sequelize

sequelize.authenticate()
    .then(() => {
      console.log('Connection good');
    })
    .catch(err => {
      console.error('Connection FUBAR', err);
    });

const AddressModel = sequelize.define('Addresses', {
  Address_ID: { type: Sequelize.INTEGER },
  Address_Line_1: { type: Sequelize.STRING },
  City: { type: Sequelize.STRING },
  State: { type: Sequelize.STRING },
  Postal_Code: { type: Sequelize.STRING },
}, {timestamps: false});

const HouseholdModel = sequelize.define('Households', {
  HouseholdID: { type: Sequelize.INTEGER },
  HouseholdName: { type: Sequelize.STRING },
}, {timestamps: false});

const Addresses = sequelize.models.Addresses;
const Households = sequelize.models.Households;

export { Addresses, Households };
