var express = require("express");
var app = express();
var college = require("./router/college.js");
var bodyParser = require('body-parser');

//app.use(bodyParser.json());
app.get("/college", college);
app.post("/college", college);

app.listen(3000);