const express = require('express')
const addUserControllers = require('../controllers/addUserControllers')

const router = express.Router()

router.post('/add',addUserControllers.addUser)


module.exports = router;