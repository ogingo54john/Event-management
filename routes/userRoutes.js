const express = require('express')
const userControllers = require('../controllers/userControllers')

const router = express.Router()

router.get('/',userControllers.addUsers)
router.get('/all',userControllers.getAllUsers)



module.exports = router;