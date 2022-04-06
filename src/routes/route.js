const express = require('express');
const logger = require('./logger.js')

const router = express.Router();

router.get('/test-me', function (req, res) {

    logger.welcome();

    res.send('My first ever api!')
});

module.exports = router;
// adding this comment for no reason