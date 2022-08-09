const api = require('../config/api');

const getCommands = async (params) => {
  try {
    const response = await api.get('/get-commands');
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

export { getCommands };

