const express = require("express")
const router = express.Router()
const {allSuggestions,addSuggestion,deleteSuggestion} = require('../controllers/suggestinsController')
const { protect, verifyTokenAndAuthorization } = require("../middleware/authMiddleware")


router.post('/:id',verifyTokenAndAuthorization,addSuggestion)
router.get('/',  allSuggestions)
router.delete('/', deleteSuggestion)

module.exports = router