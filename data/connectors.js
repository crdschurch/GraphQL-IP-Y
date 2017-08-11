require('dotenv').config();
import Sequelize from 'sequelize';
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
  Address_ID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  Address_Line_1: { type: Sequelize.STRING },
  City: { type: Sequelize.STRING },
  // State: { type: Sequelize.STRING },
  Postal_Code: { type: Sequelize.STRING },
}, {timestamps: false});

const HouseholdModel = sequelize.define('Households', {
  Household_ID: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  Household_Name: { type: Sequelize.STRING },
  Address_ID: {
    type: Sequelize.INTEGER,
    references: {
      // This is a reference to another model
      model: AddressModel,
      // This is the column name of the referenced model
      key: 'Address_ID',
    }
  }
}, {timestamps: false});

AddressModel.belongsTo(HouseholdModel);
// Comment.belongsTo(this.Image, {
//   foreignKey: 'commentable_id',
//   constraints: false,
//   as: 'image'
// });

const Addresses = sequelize.models.Addresses;
const Households = sequelize.models.Households;

export { Addresses, Households };
