const express = require("express")
const router = express.Router()
const binToNumController = require('../controller/binToNum')

router.get('/:bin', binToNumController.getNumberFromBinary)


module.exports = router