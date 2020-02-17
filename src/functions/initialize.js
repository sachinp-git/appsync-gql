import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../aws-exports.js";
Amplify.configure(awsconfig);

export {API, graphqlOperation}