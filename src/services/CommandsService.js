const api = require('../config/api');

module.exports = {
  async getCommands (params) {
    try {
      const response = await api.get('/get-commands');
      return response.data;
    } catch (error) {
      console.log(error)
    }
  }
}
