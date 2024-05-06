const repeatString = function(string,num) {
// Declarando variáveis
let stringConc='';   
let i=1;


if(num<0){

    stringConc='ERROR'; //testando números negativos
}
else {
    while(i<=num){

        stringConc=stringConc+string; //concatenando a string
        i++;
    }
}
return(stringConc)
};

// Do not edit below this line
module.exports = repeatString;
