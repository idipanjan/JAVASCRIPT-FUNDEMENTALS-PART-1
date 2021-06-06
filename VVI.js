/*
Difference between == and === operator
=== is stricted operator it does'nt allow type Coericon
== is loose operator it allow type Coericon
*/
console.log('15'== 15); //true
console.log('15'===15); //false  //this is strictly correct

const roll=prompt("Enter the number");
console.log(typeof roll);

if(roll == 93){
    console.log("great choice")
}

if(roll === 93){
    console.log("ok")
}
else{
    console.log("not ok")
}
