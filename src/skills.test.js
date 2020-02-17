import { addNewSkill } from "./functions/addNewSkill";
import { updateSkill } from "./functions/updateSkill";
//import { getAllEmployees } from "./functions/listEmployees";

// test("fetch all employees", async () => {
//   const result = await getAllEmployees();
//   expect(result.data).not.toBeNull();
//   expect(result.errors).toBeUndefined();
// });

test("Add new skill", async () => {
  const newSkillDetails = {
    input: {
      skillName: 'CI/CD'
    }
  };

  const result = await addNewSkill(newSkillDetails);
  console.log(JSON.stringify(result, 5));
  expect(result.data).not.toBeNull();
  expect(result.errors).toBeUndefined();
});


test("Update existing skill", async () => {
  const data = {
    input: {
      id: "539bf4f7-4c0e-4551-8d18-bf4a0cfae066",
      skillName: "Full stack",
    }
  };

  const result = await updateSkill(data);
  console.log(JSON.stringify(result, 5));
  expect(result.data).not.toBeNull();
  expect(result.errors).toBeUndefined();
});
