


var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var College = require("../model/collegeDb.js");

router.get("/college", function (req, resp) {
    "use strict";
    College.find(({}), function (err, data) {
        if (err) {
            resp.status(500).json(err);
        }
        if (data) {
            console.log(data);
            resp.status(200).json(data);
        }
    });
});
router.use(bodyParser.json());
router.post("/college", function (req, resp) {
    "use strict";
    const mandatoryField = ["collgeName", 'university', 'y_o_e', 'categogy'];
    if (JSON.stringify(Object.keys(req.body)) === JSON.stringify(mandatoryField)) {
        var college = new College();
        college.collegeName = req.body.collgeName;
        college.university = req.body.university;
        college.y_o_e = req.body.y_o_e;
        college.categogy = req.body.categogy;
        college.save(function (err, data) {
            if (err) {
                resp.status(500).json({
                    message: err
                });
            }
            if (data) {
                resp.status(200).json({
                    message: data._id
                });
            }
        });
        // resp.status(200).send("college created");
    } else {
        console.error("got error");
        resp.status(500).send("Please enter all the mandatory fields");
    }
   
});


module.exports = router;