const numToBin = require('../utils/numToBit')

module.exports = {
    getBitFromNum: (req, res) => {
        let num = req.params.num

        let hasil = numToBin.numToBit(num)
        if(!hasil){
            return res.status(400).json({
                status: "failed",
                message:"Something went wrong"
            })
        }
        return res.status(200).json({
            status: "success",
            message: "returned number to binary",
            data : hasil
        })

    }
}