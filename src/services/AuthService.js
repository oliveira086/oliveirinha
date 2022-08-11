const api = require('../config/api');

const AuthUser = async (params) => {
  try {
    const response = await api.post('/auth/login', params);
    return response.data;
  } catch (error) {
    return error.response.status;
  }
}

const RegisterUser = async (params) => {
  try {
    const response = await api.post('/auth/register', params);
    return response.data;
  } catch (error) {
    return error.response.status;
  }
}



export { AuthUser, RegisterUser }
