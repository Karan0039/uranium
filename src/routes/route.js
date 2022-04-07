const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/user-profile/:abcd', function (req, res) {
    console.log(req)
    console.log(req.params.abcd)
    res.send('dummy response')
})
// Problem 1
router.get('/movies', function (req, res) {
    let arrMovies = ["Dune", "Uncharted", "Avengers", "RRR", "Knives Out"];

    res.send(arrMovies);
});


//Problem 2 & 3
router.get('/movies/:indexNumber', function (req, res) {
    let arrMovies = ["Dune", "Uncharted", "Avengers", "RRR", "Knives Out"];

    if (req.params.indexNumber >= 0 && req.params.indexNumber <= arrMovies.length)
        res.send(arrMovies[req.params.indexNumber]);
    else res.send('use a valid index number');
});


//Problem 4
router.get('/films', function (req, res) {
    let arrMovies = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }];


    res.send(arrMovies);
});


// Problem 5
router.get('/films/:indexNumber', function (req, res) {
    let arrMovies = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }];
    let objMovie;
    if (req.params.indexNumber >= 0 && req.params.indexNumber <= arrMovies.length) {
        for (let i = 0; i < arrMovies.length; i++) {
            if (arrMovies[i].id == req.params.indexNumber)
            res.send(arrMovies[i]);
        }
    }
    else res.send('No movie exists with this id'); 
});



module.exports = router;
// adding this comment for no reason