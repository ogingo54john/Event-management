const express = require('express')
const deleteUserControllers = require('../controllers/deleteUserControllers')


const router = express.Router()

router.post('/:id',deleteUserControllers.deleteUser)

module.exports = router

