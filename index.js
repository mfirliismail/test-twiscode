const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const router = require('./router')

app.use('/api/v1', router)

app.get('/', (req, res) => {
    return res.status(200).json({
        status : "jalan"
    })
})
app.listen(port, () => {
    console.log("Server running on port", port)
})