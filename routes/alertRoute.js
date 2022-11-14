const express = require("express");
const router = express.Router();
const alertModal = require("../models/alertModel");
require("dotenv").config();
const { allAlert, addAlert, deleteAlert, updateAlert } = require("../controllers/alertController");

router.get("/alerts", allAlert);
router.post("/alerts", addAlert);
router.delete("/alerts/:id", deleteAlert);
router.put("/alerts/:id", updateAlert);

module.exports = router;
