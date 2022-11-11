const express = require("express")
const router = express.Router()
const alertModal = require('../models/alertModal')
// const { protect } = require("../middelwares/authMiddelware");
require('dotenv').config()
const {allAlert, addAlert, deleteAlert, updateAlert}= require('')

router.get('/', protect, allAlert)
router.post('/',protect, addAlert)
router.delete('/',protect, deleteAlert)
router.put('/',protect, updateAlert)

module.exports = router