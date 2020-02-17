const AWS = require(`aws-sdk`);
AWS.config.update({region: 'ap-south-1'});

var docClient = new AWS.DynamoDB.DocumentClient();

module.exports.dbclient = docClient;


const addItem = (newData) => {
    return new Promise((resolve, reject) => {
        docClient.put(newData, function(err, data) {
            if (err) {
              console.log("Error", err);
              reject(err);
            } else {
              console.log("Success adding data", newData);
              resolve(newData.Item);
            }
        });
    })
}

const updateItem = (updateParams) => {
    return new Promise((resolve, reject) => {
        docClient.update(updateParams, function(err, newData) {
            if (err) {
              console.log("Error", err);
              reject(err);
            } else {
              console.log("Success adding data", newData);
              resolve(newData.Attributes);
            }
        });
    })
}

module.exports.addItem = addItem;
module.exports.updateItem = updateItem;