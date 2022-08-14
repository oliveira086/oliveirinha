const api = require('../config/api');

const getCommands = async (params) => {
  try {
    const response = await api.get('/get-commands');
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

const getAudioCommands = async (params) => {
  try {
    const response = await api.get('/get-commands-audio');
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

const getImageCommands = async (params) => {
  try {
    const response = await api.get('/get-commands-imagem');
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

const getBankCommands = async (params) => {
  try {
    const response = await api.get('/get-commands-bank');
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

const getBingoCommands = async (params) => {
  try {
    const response = await api.get('/get-commands-bingo');
    return response.data;
  } catch (error) {
    console.log(error)
  }
}


export { getCommands, getAudioCommands, getImageCommands, getBankCommands, getBingoCommands };

