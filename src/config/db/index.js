const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}`);
    console.log("Connection sucessfully");
  } catch {
    console.log("Connection failue");
  }
}

module.exports = connect;
