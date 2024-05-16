const fibonacci = function(x) {

// Defininindo condições iniciais
if(x!='number')x=parseInt(x);
if(x<0||typeof x!='number')return('OOPS');
if(x===0)return(0);
if(x===1)return(1);
if(x===2)return(1);

// Começo do código de verdade
const F=Array(x);

i=2;
F[0]=1;
F[1]=1;

while(i<=x-1){
F[i]=F[i-1]+F[i-2];
i++;
}

return(F[x-1]);
};

// Do not edit below this line
module.exports = fibonacci;
