const express = require('express');
const router = express.Router();

const Controller = require("../controllers/Controller")

router.post("/batches", Controller.createbatch)

router.post("/developers", Controller.createDeveloper)

router.get("/scholarship-Developers", Controller.scholarshipDevelopers)

router.get("/developers", Controller.getDevelopers)

module.exports = router; 