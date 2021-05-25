// type data
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const Tcl = new Schema({
    information: String,
    name: String,
    age: String,
    img:String,
    slug:{type:String, slug:"name", unique:true},
},
    { timestamps: true }
);
module.exports = mongoose.model('Tcl', Tcl)