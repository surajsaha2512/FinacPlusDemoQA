const { test, expect } = require("../../../fixtures/api.fixture");

test("ReqRes API Flow - Create, Get, Update User", async ({ apiClient }) => {
  let userId;

  await test.step("Create user", async () => {
    const createResponse = await apiClient.createUser({
      name: "Suraj",
      job: "QA Engineer",
    });
    expect(createResponse.status()).toBe(201);

    const createBody = await createResponse.json();
    console.log("CREATE RESPONSE:", createBody);

    userId = createBody.id;
    expect(userId).toBeDefined();
  });

  await test.step("Get user details-Specific user", async () => {
    const getResponse = await apiClient.getUser(userId);
    console.log("GET  MY USER STATUS:", getResponse.status());

    // ReqRes does not persist data, as it return mock data not real data. That's why I am asserting 404 along with 200 when trying to verify a particular user
    expect([200, 404]).toContain(getResponse.status());
  });

  await test.step("Get all users", async () => {
    // can't verify whether my user exists because this is mock data. So just verifying 200 response code
    const getResponse = await apiClient.getAllUsers();
    const responseJson = await getResponse.json();
    console.log("GET STATUS CODE FOR ALL USERS:", getResponse.status());
    expect(getResponse.status()).toEqual(200);
    expect(responseJson.data).toBeDefined();
    expect(responseJson.data.length).toBeGreaterThanOrEqual(1);
  });

  await test.step("Update user details", async () => {
    const updateResponse = await apiClient.updateUser(userId, {
      name: "Suraj Updated",
      job: "Senior QA",
    });

    expect(updateResponse.status()).toBe(200);

    const updateBody = await updateResponse.json();

    console.log("UPDATE RESPONSE:", updateBody);

    expect(updateBody.name).toBe("Suraj Updated");
    expect(updateBody.job).toBe("Senior QA");
  });
});
