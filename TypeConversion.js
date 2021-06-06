//type conversion manually change the type of variable
//type Coericon   JS automatically converts type

//*************type conversion***********

//String to Number
const inputyear='2010';
console.log(inputyear + 5);             //20105
console.log(Number(inputyear) + 5);     //2015

console.log(Number('javascript'));     //NaN (undefined)
console.log(typeof(Nan));

//Number to String 
console.log(String(23), 23);


//***********type Coericon*********
console.log("I am "+ 21 +" Years old");
console.log("I am "+ "21" +" Years old");

//observe below code carefully
console.log('23'+13);  //JS not converting string to int at (+) operator

console.log('23'-13);  //JS converting string to int at (-) operator
console.log('2'*'3');  //6 JS converting string to int at (*) operator
console.log('4'/'2');  //2 JS converting string to int at (/) operator
console.log('4'>'2');  //true JS converting string to int at (>) operator

let n='1'+1;  //11
n=n-1;       //10  
console.log(n); //10
