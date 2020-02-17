import { API, graphqlOperation } from './initialize.js';
import { createSkills } from '../graphql/mutations.js';

export async function addNewSkill (data) {
    const newSkill = await API.graphql(graphqlOperation(createSkills, data));
    return newSkill
}