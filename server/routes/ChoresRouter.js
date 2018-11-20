var express = require('express');
var router = express.Router();

var choresController = require('../controllers/Chores.js');

router.get('/', function(req, res, next) { choresController.getChores(req, res, next); });
router.get('/:choreId', function(req, res, next) { choresController.getChoreById(req, res, next); });

router.post('/', function(req, res, next) { choresController.createChore(req, res, next); });
router.put('/:choreId', function(req, res, next) { choresController.updateChore(req, res, next); });
router.delete('/:choreId', function(req, res, next) { choresController.deleteChore(req, res, next); });

module.exports = router;


//curl --header "Content-Type: application/json"  --request POST --data '{"userId":"7453","name":"some user","email":"user@myemail.com","houseId":"72"}' http://localhost:3000/users

//curl --header "Content-Type: application/json"  --request DELETE --data '{"houseId":"99","name":"newestHouse","userCount":"12"}' http://localhost:3000/houses/99