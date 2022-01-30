var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/college_review");

var categorySchema = mongoose.Schema({
    categoryName: String
});
module.exports = mongoose.model("Category", categorySchema);