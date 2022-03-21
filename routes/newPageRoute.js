const express = require('express')
const newPageControllers = require('../controllers/newPageControllers')

const router = express.Router()


router.get('/',newPageControllers.getNewPage)

module.exports =router