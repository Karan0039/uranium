const express = require('express');
const router = express.Router();
const controller = require("../controllers/controller")

router.post("/createAuthor", controller.createAuthor)

router.post("/createbook", controller.createBook)

router.get("/listBooks", controller.listBooks)

router.get("/findAuthor", controller.findAuthor)

router.get("/findBooks", controller.findBooks)


module.exports = router;