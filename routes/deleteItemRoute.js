const express = require('express')
const deleteItemsControllers = require('../controllers/deleteItemsControllers')


const router = express.Router()

router.post('/:id',deleteItemsControllers.deleteItems)

module.exports = router

