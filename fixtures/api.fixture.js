const base = require('@playwright/test');
const { ApiClient } = require('../utils/apiClient');

exports.test = base.test.extend({
  apiClient: async ({ request }, use) => {
    const client = new ApiClient(request);
    await use(client);
  }
});

exports.expect = base.expect;