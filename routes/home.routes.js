const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home.controllers");
//get all details
router.get("/", homeController.getHome);
//get single detatis
router.get("/:id", homeController.getSingleHome);
//create new entity
router.post("/:id", homeController.postHome);
//update created entity
router.put("/:id", homeController.putHome);
//delete specific enetity
router.delete("/:id", homeController.deleteHome);

module.exports = router;
