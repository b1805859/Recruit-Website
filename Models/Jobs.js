const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);


const Jobs = new Schema({
    name: { type: String},
    location: { type: String },
    skill: { type: String},
    description: { type: String },
    priority: { type: String },
    slug: {type: String, slug:"name"},
    time: {type: String}
}, {timestamps: true}
);

module.exports = mongoose.model('Jobs', Jobs);