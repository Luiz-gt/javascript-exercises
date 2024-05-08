const add = function(x,y) {

  return(x+y);

};

const subtract = function(x,y) {

	return(x-y);

};

const sum = function(A) {
  let s=0;
  let i=0;

  while (i<A.length){
    s=s+Number(A[i]);
    i++;
  }

  return(s);

};

const multiply = function(A) {
  let m=1;
  for(let i=0;i<A.length;i++){
  m=m*A[i];
  }
  return(m);
};

const power = function(x,y) {

	return(x**y);
};

const factorial = function(x) {

  if(x==0){return(1)}

  else{

  let f=x;
  let i=1;

	while(i<x){
    f=f*i;
    i++;
  }

  return(f);
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
