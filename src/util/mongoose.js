module.exports = {
  mutipleMongooseToObject: function (mongooses) {
    let array = mongooses.map((mongoose) => mongoose.toObject());
    let array_approved = array.filter((array) => array.approve == true);
    return array_approved;
  },
  singleToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
