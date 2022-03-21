const express = require('express')
const addItemControllers = require('../controllers/adItemContoller')

const router = express.Router()

router.post('/add',addItemControllers.addItems)



module.exports =router