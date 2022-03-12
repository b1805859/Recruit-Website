module.exports = {
    mutipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject());
    },
    singleToObject: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
};