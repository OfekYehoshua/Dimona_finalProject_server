const express = require("express")
const router = express.Router()
const {allSuggestions,addSuggestion,deleteSuggestion} = require('../controllers/suggestinsController')


router.post('/', addSuggestion)
router.get('/',  allSuggestions)
router.delete('/', deleteSuggestion)

module.exports = router