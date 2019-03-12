var express = require('express');
var router = express.Router();

//Data Access Layer 
var dal = require('../db/dal');

/* GET events page. */
router.get('/', function (req, res) {

    dal.getEvents(function(result){

        if (result != null)
            res.json(result);
        else
            res.json({});

    })
})

module.exports = router;