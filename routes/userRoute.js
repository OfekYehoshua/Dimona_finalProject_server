const express = require('express')
const { registerUser,authUser, allUsers } = require('../controllers/userControllers')
const { protect,verifyTokenAdmin,verifyTokenAndAuthorization } = require('../middleware/authMiddleware')
const router = express.Router()

router.route('/').post(registerUser).get(verifyTokenAndAuthorization,allUsers)
router.post('/login',authUser)


module.exports = router