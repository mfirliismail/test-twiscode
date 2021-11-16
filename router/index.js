const express = require('express')
const router =  express.Router()
const binToNumRoute = require('./bintonumRoute')
const numToBinRoute = require('./numtobinRoute')


router.use('/bintonum', binToNumRoute)
router.use('/numtobin', numToBinRoute)


module.exports = router