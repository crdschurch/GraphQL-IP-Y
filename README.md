# GraphQL-IP-Y
Repo for IP Sprint Y - investigate GraphQL and MP

# Reference post

The code is heavily 'borrowed' from the following post:

https://dev-blog.apollodata.com/tutorial-building-a-graphql-server-cddaa023c035

# Running the app

## Clone the repo

```
git clone https://github.com/crdschurch/GraphQL-IP-Y.git
cd GraphQL-IP-Y
npm install
```

## Create the .env file

We are connecting Ministry Platform database in int, so we need to define a .env file to contain the connection information and credentials. We use an NPM package called dotenv to manage this.

### Load the dotenv module

npm i dotenv --save

### create the .env file

In the root folder of the application create a filed named .env. Add the following items:

```
DB = 'MinistryPlatform'
DB_USER = ''
DB_PASSWORD =''
DB_HOST = 'MP-Int-DB.centralus.cloudapp.azure.com'
DB_DIALECT = 'mssql'
```

### Load Sequelize

npm i sequelize

## Start the app

npm start

## Navigate to http://localhost:8888/graphiql

This will bring up a GraphQL UI called GraphiQL (pronounced 'graphical').

Type the following into the left pane in GraphiQL:

```
{
  household(Household_ID: 1) {
    Household_ID
    Household_Name
    Address {
      Address_ID
      Address_Line_1
      City
      Postal_Code
    }
  }
}
```

This will display the following in the right pane:

```
{
  "data": {
    "household": {
      "Household_ID": "1",
      "Household_Name": "Think Ministry, Inc.",
      "Address": {
        "Address_ID": "1",
        "Address_Line_1": "1595 Peachtree Pkwy Ste 204-211",
        "City": "Cumming",
        "Postal_Code": "30041"
      }
    }
  }
}
```

# Adding additional items

## Define a schema

Add to the string in schema.js

## Write a resolver

Add the item to the resolvers object in resolvers.js

## Add a database-specific model

In connectors.js, use the Sequelize db.define method to create a model object corresponding the the data to be returned from the database.

# Mocks

The file mocks.js contains mocked data that you can use if you can't connect to the database. To use the mock, modify the mock object in mocks.js and then uncomment out the following line in schema.js.

// addMockFunctionsToSchema({ schema, mocks });





