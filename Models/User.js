const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Users = new Schema({
    name: {type: String},
    email:{type: String},
    password: {type: String},
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }]
}, {timestamps: true}
);



module.exports = mongoose.model('Users', Users);