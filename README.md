# GraphQL-IP-Y
Repo for IP Sprint Y - investigate GraphQL and MP

### Sample Query

{
  address (Address_ID: 5302613) {
    Address_ID
    Address_Line_1
    City
    Postal_Code
  }

  contact (contactId: 7667748) {
    contactId
    displayName
    participant {
      participantId
    }
  }

  events {
    eventId
    eventTitle
  }

  participant (participantId: 7558913) {
    participantId
    contact {
      contactId
      displayName
    }
  }

  household (Household_ID: 5758325) {
    Household_ID
    Household_Name
    Address {
      Address_ID
      Address_Line_1
      City
      Postal_Code
    }
  	contacts {
  	  contactId
  	  displayName
  	}
  }
}
