import { API, graphqlOperation } from './initialize.js';
import { editEmployee } from '../graphql/mutations.js';

export async function updateEmployee (data) {
    const newEmployee = await API.graphql(graphqlOperation(editEmployee, data));
    return newEmployee
}