/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
      id
      firstname
      lastname
      address {
        items {
          id
          line1
          line2
          city
          state
          zipcode
        }
        nextToken
      }
      skills {
        items {
          id
          skillName
        }
        nextToken
      }
    }
  }
`;
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
      id
      firstname
      lastname
      address {
        items {
          id
          line1
          line2
          city
          state
          zipcode
        }
        nextToken
      }
      skills {
        items {
          id
          skillName
        }
        nextToken
      }
    }
  }
`;
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
      id
      firstname
      lastname
      address {
        items {
          id
          line1
          line2
          city
          state
          zipcode
        }
        nextToken
      }
      skills {
        items {
          id
          skillName
        }
        nextToken
      }
    }
  }
`;
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress {
    onCreateAddress {
      id
      line1
      line2
      city
      state
      zipcode
    }
  }
`;
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress {
    onUpdateAddress {
      id
      line1
      line2
      city
      state
      zipcode
    }
  }
`;
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress {
    onDeleteAddress {
      id
      line1
      line2
      city
      state
      zipcode
    }
  }
`;
export const onCreateSkills = /* GraphQL */ `
  subscription OnCreateSkills {
    onCreateSkills {
      id
      skillName
    }
  }
`;
export const onUpdateSkills = /* GraphQL */ `
  subscription OnUpdateSkills {
    onUpdateSkills {
      id
      skillName
    }
  }
`;
export const onDeleteSkills = /* GraphQL */ `
  subscription OnDeleteSkills {
    onDeleteSkills {
      id
      skillName
    }
  }
`;
