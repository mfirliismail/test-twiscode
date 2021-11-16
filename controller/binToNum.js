const binToNum = require('../utils/binToNum')

module.exports = {
    getNumberFromBinary: (req, res) => {
        const bin = req.params.bin

        let hasil = binToNum.binToNum(bin)
        if(!hasil){
            return res.status(400).json({
                status: "failed",
                message:"Something went wrong"
            })
        }
        return res.status(200).json({
            status: "success",
            message: "returned binary to number",
            data : hasil
        })
    }
}