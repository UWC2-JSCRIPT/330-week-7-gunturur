const mongoose = require('mongoose');

const Weather = require('../models/weather');
  
  
const getWeatherByName = async (name) => {
  try {
    return await Weather.findOne({ name });
  } catch (error) {
    console.error(`Error while getting weather by name: ${error}`);
    throw error;
  }
};

module.exports = { getWeatherByName };
  