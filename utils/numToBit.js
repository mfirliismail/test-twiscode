module.exports = {
    numToBit(num){
        var number = num
        var result = []
        while(number >= 1 ){
            result.unshift(Math.floor(number%2))
            number = number/2
        }
        return result.join("")
    }
}

