
const mongoose  = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({

name: {
    type: String,
    trim: true,
},
price:{
    type: Number,
    
},
stock: {
    type: Number,
    default: 0,
},
available:{
    type: Boolean,
    default: 0,
 },

});
module.exports = mongoose.model('Products',productsSchema );