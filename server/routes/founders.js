var express = require('express');
var router = express.Router();

//Data Access Layer 
var dal = require('../db/dal');


/* GET founders */
router.get('/', function(req, res){

    dal.getFounders(function(result){

        if(res != null)
            res.json(result);
        else
            res.json({});

    })
})

/* GET founder by id */
router.get('/:id(\\d+)', function (req, res) {

    dal.getFounderById(req.params['id'], function (result) {

        if (result != null)
            res.json(result);
        else
            res.status(404).send("Founder not found!");

    })
})

module.exports = router;