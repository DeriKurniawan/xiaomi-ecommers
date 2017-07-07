var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemsSchema = new Schema ({
  name: String,
  price: Number,
  category: String,
  stock: Number,
  pict: String,
  procesor: String,
  camera: String,
  waranti: String
})
var Items = mongoose.model('Items', ItemsSchema);

module.exports = Items;
