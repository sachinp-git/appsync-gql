import { API, graphqlOperation } from './initialize.js';
import { updateSkills } from '../graphql/mutations.js';

export async function updateSkill (data) {
    const updatedSkill = await API.graphql(graphqlOperation(updateSkills, data));
    return updatedSkill
}