const express = require('express')
const addUserControllers = require('../controllers/addUserControllers')

const router = express.Router()

router.post('/add',addUserControllers.addUser)
router.post('/login',addUserControllers.loginUser)
router.get('/signin',addUserControllers.signin)
module.exports = router;
