import Sequelize, { INTEGER, STRING } from 'sequelize';

require('dotenv').config();

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: 1433,
  dialect: process.env.DB_DIALECT,
  options: {
    timestamps: false,
  },
});

// sequelize;

sequelize.authenticate()
    .then(() => {
      console.log('Connection good');
    })
    .catch(err => {
      console.error('Connection FUBAR', err);
    });

const AddressModel = sequelize.define('Addresses', {
  Address_ID: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  Address_Line_1: { type: STRING },
  City: { type: STRING },
  // State: { type: STRING },
  Postal_Code: { type: STRING },
}, { timestamps: false });

const HouseholdModel = sequelize.define('Households', {
  Household_ID: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  Household_Name: { type: STRING },
}, { timestamps: false });
HouseholdModel.belongsTo(AddressModel, { foreignKey: 'Address_ID' });

const Addresses = sequelize.models.Addresses;
const Households = sequelize.models.Households;

export { Addresses, Households };
