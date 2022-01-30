var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/college_review');
var collegeSchema = mongoose.Schema({
    collegeName: String,
    university: String,
    y_o_e: String,
    categogy: String,

 });
 module.exports = mongoose.model('College', collegeSchema);
 