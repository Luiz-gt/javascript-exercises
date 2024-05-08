const removeFromArray = function(A,...B) {          
i=0;
while(i<B.length){
    
    if (A.includes(B[i])){
        A.splice(A.indexOf(B[i]),1);
    } 
    else{
        i++;
    }
}
return(A);
};

// Do not edit below this line
module.exports = removeFromArray;
