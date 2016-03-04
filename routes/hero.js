var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// connection to the mongo database
mongoose.connect('mongodb://localhost/hero-tracker');

// model schema with variable
mongoose.model(
    'Hero',
    new Schema({
            "alias": String,
            "first_name": String,
            "last_name": String,
            "city": String,
            "primary_power": String
        },
        {
            collection: 'Heroes'
        }
    ));

var Hero = mongoose.model('Hero');

// send array of tasks to the client using the Hero model
router.get('/', function(req, res) {
    //console.log('here');
    Hero.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }
        res.send(data);
    });
});

// post info to the database
// why do the req.body variables start with hero, then a capital letter?
router.post('/', function(req, res) {
    var addedHero = new Hero({
        "alias": req.body.heroAlias,
        "first_name": req.body.heroFirstName,
        "last_name": req.body.heroLastName,
        "city": req.body.heroCity,
        "primary_power": req.body.heroPrimaryPower
    });

    addedHero.save(function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }
        Hero.find({}, function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }
            res.send(data);
        });
    });
});

// updates the database
router.put('/:id', function(req, res){

    var newAlias = req.body.heroAlias;
    var newFirst_name = req.body.heroFirstName;
    var newLast_name = req.body.heroLastName;
    var newCity = req.body.heroCity;
    var newPrimaryPower = req.body.heroPrimaryPower;

    Hero.findByIdAndUpdate(
        {_id: req.params.id},
        {
            $set: {
                alias: newAlias,
                first_name: newFirst_name,
                last_name: newLast_name,
                city: newCity,
                primary_power: newPrimaryPower
            }
        },
        function(err, data) {
            if(err) {
                console.log('ERR: ', err);
            }
            res.send(data);
        }
    );

});



module.exports = router;