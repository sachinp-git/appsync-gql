import { API, graphqlOperation } from './initialize.js';
import { addNewEmployee } from '../graphql/mutations.js';

export async function createEmployee (data) {
    const newEmployee = await API.graphql(graphqlOperation(addNewEmployee, data));
    return newEmployee
}