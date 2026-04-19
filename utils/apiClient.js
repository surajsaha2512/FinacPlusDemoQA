class ApiClient {
  constructor(request) {
    this.request = request;
    this.baseURL = process.env.SERVICE_BASE_URL;  
}

    getHeaders() {
    return {
      'x-api-key': process.env.API_KEY,
      'Content-Type': 'application/json'
    };
  }

  async createUser(payload) {
    return await this.request.post(`${this.baseURL}/users`, {
      data: payload,
      headers: this.getHeaders()
    });
  }

  async getUser(userId) {
    return await this.request.get(`${this.baseURL}/users/${userId}`,{
        headers: this.getHeaders()
    });
  }

  async getAllUsers() {
    return await this.request.get(`${this.baseURL}/users/`,{
        headers: this.getHeaders()
    });
  }

  async updateUser(userId, payload) {
    return await this.request.put(`${this.baseURL}/users/${userId}`, {
      data: payload,
      headers: this.getHeaders()
    });
  }
}

module.exports = { ApiClient };