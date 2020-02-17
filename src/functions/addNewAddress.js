import { API, graphqlOperation } from './initialize.js';
import { addNewAddress, updateAddress } from '../graphql/mutations.js';

export async function createAddress (data) {
    const newAddress = await API.graphql(graphqlOperation(addNewAddress, data));
    return newAddress
}

export async function editAddress (data) {
    const updatedAddress = await API.graphql(graphqlOperation(updateAddress, data));
    return updatedAddress;
}