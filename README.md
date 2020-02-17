

Steps to test the graphql endpoints


1. Clone the repository
2. Check into the folder and install dependencies
    ###   `npm i`

    Read operations resolves through prebuilt dynamo DB resolvers provided by appsync and amplify

    For the Create, Update and Delete operations a custom lambda function which is deployed on AWS and is triggred by appsync.
    Graph QL transform is used to map the mutations to the function


3. There are separate files to exectute and test each of the Employee, Address and Skills entity
4. To test CRUD operaions on Employee entity
    ### `npm run test:employee`

5. To test CRUD operaions on Address entity
    ### `npm run test:address`

4. To test CRUD operaions on Skills entity
    ### `npm run test:skills`


