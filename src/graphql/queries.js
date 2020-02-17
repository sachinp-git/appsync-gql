/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstname
        lastname
        address {
          nextToken
        }
        skills {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      line1
      line2
      city
      state
      zipcode
    }
  }
`;
export const listAddresss = /* GraphQL */ `
  query ListAddresss(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getSkills = /* GraphQL */ `
  query GetSkills($id: ID!) {
    getSkills(id: $id) {
      id
      skillName
    }
  }
`;
export const listSkillss = /* GraphQL */ `
  query ListSkillss(
    $filter: ModelSkillsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkillss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        skillName
      }
      nextToken
    }
  }
`;
