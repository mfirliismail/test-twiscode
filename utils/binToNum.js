module.exports = {
    binToNum(bin){
        var inp = bin;
    
        var len = inp.length;
    
        var string = inp.split("");
    
        var counter = string.map(function(val,index){
         return index;  
        }).reverse();
        
        var storeBin = string.map(function(val,index){
        let x ="";
    
    
        if(val>0){
        x += 2;
        }else if(val===0){
        x += 0;
        }
        return Math.pow(string[index]*x,counter[index]);
    
        });
    
    
        var sum=0; 
    
        for(i=0;i<len;i++){
        sum += storeBin[i]
        }
       return sum
    }
    
}