const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);


const Jobs = new Schema({
    namecity: { type: String},
    namejob:{type:String},
    email:{type:String},
    number: {type: Number},
    location: { type: String },
    skill: { type: String},
    keyword: {type: String},
    description: { type: String },
    slug: {type: String, slug:"name"},
    time: {type: String},
    id_user:{type:String},
    user_apply:[
        {   userMail:{type: String},
            userNumber:{type: Number},
            userLinkCV:{type: String},
        }
    ]
}, {timestamps: true}
);

module.exports = mongoose.model('Jobs', Jobs);