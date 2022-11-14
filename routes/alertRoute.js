const express = require("express");
const router = express.Router();
const alertModal = require("../models/alertModel");
require("dotenv").config();
const { allAlert, addAlert, deleteAlert, updateAlert } = require("../controllers/alertController");

router.get("/", allAlert);
router.post("/", addAlert);
router.delete("/:id", deleteAlert);
router.put("/:id", updateAlert);

module.exports = router;
