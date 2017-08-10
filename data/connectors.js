import Sequelize from 'sequelize';
const sequelize = new Sequelize('database', 'user', 'password', {
  host: 'host url',
  port: 1433,
  dialect: 'mssql',
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
  AddressID: { type: Sequelize.INTEGER },
  Address_Line_1: { type: Sequelize.STRING },
  City: { type: Sequelize.STRING },
  State: { type: Sequelize.STRING },
  Postal_Code: { type: Sequelize.STRING },
});

const HouseholdModel = sequelize.define('Households', {
  HouseholdID: { type: Sequelize.INTEGER },
  HouseholdName: { type: Sequelize.STRING },
});

const Addresses = sequelize.models.Addresses;
const Households = sequelize.models.Households;

export { Addresses, Households };
