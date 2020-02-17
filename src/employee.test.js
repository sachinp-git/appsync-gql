import { createEmployee } from "./functions/addNewEmployee";
import { updateEmployee } from "./functions/updateEmployee";
import { getAllEmployees } from "./functions/listEmployees";

test("fetch all employees", async () => {
  const result = await getAllEmployees();
  expect(result.data).not.toBeNull();
  expect(result.errors).toBeUndefined();
});

test("Add new employee", async () => {
  const newEmployeeDetails = {
    input: {
      firstname: "Hulk",
      lastname: "Smash"
    }
  };

  const result = await createEmployee(newEmployeeDetails);
  console.log(JSON.stringify(result, 5));
  expect(result.data).not.toBeNull();
  expect(result.errors).toBeNull();
});


test("Update existing employee", async () => {
  const data = {
    input: {
      id: "896c185b-1c15-4554-a334-959aa2909e4b",
      firstname: "John",
      lastname: "Stark"
    }
  };

  const result = await updateEmployee(data);
  console.log(JSON.stringify(result, 5));
  expect(result.data).not.toBeNull();
});
