/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

const models = require('./models');

const resolvers = {
    Mutation: {
        addNewEmployee: models.createEmployee,
        addNewAddress: models.createAddress,
        editEmployee: models.updateEmployee,
        editAddress: models.updateAddress,
        editSkill: models.updateSkill,
        addNewSkill: models.createSkill
    }
}

exports.handler = async (event) => {
    // TODO implement
    console.log("EVENT --> ",JSON.stringify(event),2);
    const evetType = event.typeName;
    const eventName = event.fieldName;
    const eventHandler = resolvers[evetType][eventName];
    if (eventHandler) {
        const result = await eventHandler(event.arguments.input)
        console.log("Handler result",result)
        return result;
    }
};
