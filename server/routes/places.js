var express = require('express');
var router = express.Router();

//Data Access Layer 
var dal = require('../db/dal');


/* GET places */
router.get('/', function(req, res){

    dal.getPlaces(function(result){

        if(res != null)
            res.json(result);
        else
            res.json({});

    })
})

/* GET place by id */
router.get('/:id(\\d+)', function (req, res) {

    dal.getPlaceById(req.params['id'], function (result) {

        if (result != null)
            res.json(result);
        else
            res.status(404).send("Place not found!");

    })
})

module.exports = router;