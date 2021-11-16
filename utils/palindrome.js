module.exports = {
    palindrome(string){
        let test = string.split(" ")
        let result = []
        for(let i = 0; i < test.length; i++){
            let hasil = test[i].split("")
            hasil.sort()
            for(let j = 0; j < test.length; j++){
                
                if(hasil[i] == hasil[j] && i !== j){
    
                    result.push(test[j])
                }
                
    
            }
            
        }
        return result.join(" ")
    }
    
}