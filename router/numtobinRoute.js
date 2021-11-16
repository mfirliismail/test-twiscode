const express = require("express")
const router = express.Router()
const numToBinController = require('../controller/numToBin')

router.get('/:num', numToBinController.getBitFromNum)


module.exports = router