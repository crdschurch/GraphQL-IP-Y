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

const ContactModel = sequelize.define('Contacts', {
  contactId: {
    field: 'Contact_ID',
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  displayName: {
    field: 'Display_Name',
    type: STRING,
  },
}, { timestamps: false });

const EventModel = sequelize.define('Events', {
  eventId: {
    field: 'Event_ID',
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  eventTitle: {
    field: 'Event_Title',
    type: STRING,
  },
}, { timestamps: false });

const HouseholdModel = sequelize.define('Households', {
  Household_ID: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  Household_Name: { type: STRING },
}, { timestamps: false });

const ParticipantModel = sequelize.define('Participants', {
  participantId: {
    field: 'Participant_ID',
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
  },
}, { timestamps: false });

// Comment.belongsTo(this.Image, {
//   foreignKey: 'commentable_id',
//   constraints: false,
//   as: 'image'
// });

ParticipantModel.belongsTo(ContactModel, { as: 'contact', foreignKey: 'Contact_ID' });
ContactModel.hasOne(ParticipantModel, { as: 'participant', foreignKey: 'Contact_ID' });
HouseholdModel.belongsTo(AddressModel, { foreignKey: 'Address_ID' });
HouseholdModel.hasMany(ContactModel, { as: 'contacts', foreignKey: 'Household_ID' });

export const {
  Addresses,
  Contacts,
  Events,
  Households,
  Participants,
} = sequelize.models;
