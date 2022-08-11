const api = require('../config/api');

const AuthUser = async (params) => {
  try {
    const response = await api.post('/auth/login', params);
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

export { AuthUser }
