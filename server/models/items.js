// app/models/user.js
// load the things we need
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

// define the schema for our user model
var itemSchema = mongoose.Schema({
    item_code: String,
    name: String,
    description: String,
    price: Number,
    stock: Number
});


// create the model for users and expose it to our app
module.exports = mongoose.model('items', itemSchema); // nama collection
