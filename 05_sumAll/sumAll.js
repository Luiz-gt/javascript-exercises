const sumAll = function(int1,int2) {

//testando se os parametros são positivos
if (int1<0||int2<0){
    return('ERROR');
}
//testando se os parametros são números
else if(typeof int1!='number'||typeof int2!='number'){
    return('ERROR');
}

//Se os parametros passarem, começo da operação
else{

let s=0;
let i = 0;

if (int1<int2){
   while(i<=int2-int1) {
    s=s+int1+i;
    i++;
   }
}
else{
    while(i<=int1-int2){
        s=s+int2+i;
        i++;
    }
}
return(s);
}
};

// Do not edit below this line
module.exports = sumAll;
