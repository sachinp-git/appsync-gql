const dbClient = require("../db-actions/");

const uuidv4 = require('uuid/v4');
const EMP_TABLE_NAME = "Employee-3eljshkjire7xoriwvf6bt24ru-dev"
const ADDR_TABLE_NAME = "Address-3eljshkjire7xoriwvf6bt24ru-dev"
const SKILL_TABLE_NAME = "Skills-3eljshkjire7xoriwvf6bt24ru-dev"

const createEmployee = async (employeeData) => {
    employeeData.__typename = 'Employee'

    if (!employeeData.id) {
        employeeData.id = uuidv4();
    }

    const params = {
        TableName: EMP_TABLE_NAME,
        Item: employeeData
    }

    const result = await dbClient.addItem(params);
    console.log(result);
    return result;
    
}


const updateEmployee = async (employeeData) => {
  const keyAttribute = employeeData.id;
  delete employeeData.id;
  let UpdateExpression = 'set ';
  let ExpressionAttributeValues = Object.keys(employeeData).reduce((acc, paramName, index) => {
    const key = `:${paramName}`;
    acc[key] = employeeData[paramName];

      if (index === 0) {
        UpdateExpression += `${paramName} = ${key}`
      } else{
        UpdateExpression += `,${paramName} = ${key}`
      }
    return acc
  }, {})
  console.log(UpdateExpression)

  const params = {
    TableName: EMP_TABLE_NAME,
    Key: {
      id: keyAttribute
    },
    ConditionExpression: 'attribute_exists(id)',
    UpdateExpression,
    ExpressionAttributeValues,
    ReturnValues: 'ALL_NEW' 
  }

  const result = await dbClient.updateItem(params);

  console.log(result);
  return result;
}

const createAddress = async (addressData) => {

  addressData.__typename = 'Address'

  if (!addressData.id) {
      addressData.id = uuidv4();
  }

  const params = {
      TableName: ADDR_TABLE_NAME,
      Item: addressData
  }


  const result = await dbClient.addItem(params);
  console.log(result);
  return result;
  
}

const createSkill = async (skillData) => {

  skillData.__typename = 'Skill'

  if (!skillData.id) {
      skillData.id = uuidv4();
  }

  const params = {
      TableName: SKILL_TABLE_NAME,
      Item: skillData
  }


  const result = await dbClient.addItem(params);
  console.log(result);
  return result;
  
}

const updateAddress = async (addressData) => {
  const keyAttribute = addressData.id;
  delete addressData.id;
  let UpdateExpression = 'set ';
  let ExpressionAttributeValues = Object.keys(addressData).reduce((acc, paramName, index) => {
    const key = `:${paramName}`;
    acc[key] = addressData[paramName];

      if (index === 0) {
        UpdateExpression += `${paramName} = ${key}`
      } else{
        UpdateExpression += `,${paramName} = ${key}`
      }
    return acc
  }, {})
  console.log(UpdateExpression)

  const params = {
    TableName: ADDR_TABLE_NAME,
    Key: {
      id: keyAttribute
    },
    ConditionExpression: 'attribute_exists(id)',
    UpdateExpression,
    ExpressionAttributeValues,
    ReturnValues: 'ALL_NEW' 
  }

  const result = await dbClient.updateItem(params);

  console.log(result);
  return result;  
}

const updateSkill = async (skillData) => {
  const keyAttribute = skillData.id;
  delete skillData.id;
  let UpdateExpression = 'set ';
  let ExpressionAttributeValues = Object.keys(skillData).reduce((acc, paramName, index) => {
    const key = `:${paramName}`;
    acc[key] = skillData[paramName];

      if (index === 0) {
        UpdateExpression += `${paramName} = ${key}`
      } else{
        UpdateExpression += `,${paramName} = ${key}`
      }
    return acc
  }, {})
  console.log(UpdateExpression)

  const params = {
    TableName: SKILL_TABLE_NAME,
    Key: {
      id: keyAttribute
    },
    ConditionExpression: 'attribute_exists(id)',
    UpdateExpression,
    ExpressionAttributeValues,
    ReturnValues: 'ALL_NEW' 
  }

  const result = await dbClient.updateItem(params);

  console.log("RESULT==========>",result);
  return result;  
}


module.exports.createEmployee = createEmployee;
module.exports.createAddress = createAddress;
module.exports.updateEmployee = updateEmployee;
module.exports.updateAddress = updateAddress;
module.exports.createSkill = createSkill;
module.exports.updateSkill = updateSkill;