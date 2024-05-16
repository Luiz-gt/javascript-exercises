const findTheOldest = function(people) {
let age=people.map((obj)=>{

    if('yearOfDeath' in obj){
        return obj.yearOfDeath-obj.yearOfBirth;}

    else{
        let d=new Date();
        let year=d.getFullYear();
        return year-obj.yearOfBirth;}
}
);

let oldest=age[0];
let ind=0;

for (let i=1;i<age.length;i++) { 
    
    if (age[i]>oldest){
        oldest=age[i];
        ind=i;
    }
};

return (people[ind]);
};

// Do not edit below this line
module.exports = findTheOldest;
