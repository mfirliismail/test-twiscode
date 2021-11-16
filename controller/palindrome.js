const utils = require('../utils/palindrome')

module.exports = {
    palindrome: (req, res) => {
        const input = req.body.input

        let hasil = utils.palindrome(input)
        if(!hasil){
            return res.status(400).json({
                status: "failed",
                message:"Something went wrong"
            })
        }
        return res.status(200).json({
            status: "success",
            message: "returned palindrom of words",
            data : hasil
        })

    }
}