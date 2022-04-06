const express = require('express');
const logger = require('../logger/logger.js')
const helper = require('../util/helper.js')
const formatter = require('../validator/formatter.js')

const router = express.Router();

router.get('/test-me', function (req, res) {

    logger.welcome();
    helper.printDate();
    helper.printMonth();
    helper.getBatchInfo();
    formatter.trim("functionUp ");
    formatter.changetoLowerCase("FUnctiON UP is COding BOOTCamp");
    formatter.changeToUpperCase("FUnctiON UP is COding BOOTCamp");
    res.send('My first ever api!')
});


router.get('/help', function (req, res) {
    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    let _ = require("lodash");
    console.log(_.chunk(monthNames, monthNames.length / 4));

    let oddArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    console.log(_.tail(oddArray))

    let unionFx = function (...a) {
        return _.union(...a);
    }
    let a1 = [1, 2, 3, 4];
    let a2 = [3, 4, 5, 6];
    let a3 = [7, 8, 6, 7];
    let a4 = [9, 8, 5, 4];
    let a5 = [68, 7, 9, 68];
    console.log(unionFx(a1, a2, a3, a4, a5));

    let moviesArr = [["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"]]
    console.log(_.fromPairs(moviesArr));
    res.send('Problem 4');

});

module.exports = router;
// adding this comment for no reason