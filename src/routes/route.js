const express = require('express');
const missing = require('./missingNumber')


const router = express.Router();

router.get('/prob1', function (req, res) {
    res.send(missing.prob1());
});

router.get('/prob2', function (req, res) {
    res.send(missing.prob2());
    });

module.exports = router;
// adding this comment for no reason