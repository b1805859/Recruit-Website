const mongoose = require('mongoose');
require('dotenv').config();
async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connection sucessfully');
  } catch {
    console.log('Connection failue');
  }
}

module.exports = connect;
