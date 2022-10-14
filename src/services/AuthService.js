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

const GetUserInformation = async (bearerToken) => {
  try {
    const response = await api.post('/auth/get-user-by-token', null, {
      headers: {
        "Authorization": `Bearer ${bearerToken}`,
      },
    });
    return response.data;
  } catch (error) {
    return error.response.status;
  }
}



export { AuthUser, RegisterUser, GetUserInformation }
