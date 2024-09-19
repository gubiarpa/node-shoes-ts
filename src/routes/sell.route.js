const express = require('express')
const router = express.Router()
const { getAllSells, createSell } = require('../controllers/sell.controller')

router.get('/', getAllSells)
router.post('/', createSell)

module.exports = router
