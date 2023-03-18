const mongoose = require('mongoose');


async function connect() {
    try{
        await mongoose.connect('mongodb://localhost:27017/PTPMTN');
        console.log("Connection sucessfully");
    }
    catch
    {
        console.log("Connection failue");
    }
}


module.exports = connect;