const express = require('express')
const router = express.Router()
const { getAllSells, createSell } = require('../controllers/sell.controller.js')

router.get('/', getAllSells)
router.post('/', createSell)

module.exports = router
