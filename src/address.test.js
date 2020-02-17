import { editAddress, createAddress} from  "./functions/addNewAddress"

test("Add new address", async () => {
  const newAddress = {
    input: {
      line1: 'line1',
      line2: 'line2',
      city: 'Thane',
      state: 'Mah',
      zipcode: '400615'
    }
  };

  const result = await createAddress(newAddress);
  console.log(JSON.stringify(result, 5));
  expect(result.data).not.toBeNull();
  expect(result.errors).toBeUndefined();
});



test("update address to employeeId", async () => {
  const newAddress = {
    input: {
      id: "e0773137-683d-4a9c-b756-e2ab9e66a151",
      employeeAddressId: "5e2068c8-57fb-4418-b2d3-b43b725cd190"
    }
  };

  const result = await editAddress(newAddress);
  console.log(JSON.stringify(result, 5));
  expect(result.data).not.toBeNull();
  expect(result.errors).toBeUndefined();
});