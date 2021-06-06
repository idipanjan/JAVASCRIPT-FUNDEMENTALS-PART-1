//Operators

//arithmetic operator
//  - , *, /, **  operator
const now = 2021;

const ageofJohn = now - 1999; //22
const ageofkaji = now - 1998; //23

console.log(ageofJohn, ageofkaji);

console.log(ageofJohn / 2, ageofkaji * 2, 2 ** 3);

// + operator
firstname = "Dipanjan";
lastname = "Maji";
console.log(firstname + " " + lastname);

//Assignment operators
let x = 2;
x += 4; //x=x+4=6
x *= 4; //x=x*4=24
x /= 2; //x=x/2=12
x++; //x=x+1=13
x--; //x=x-1=12

console.log(x); //12

//Comparison operators
console.log("a" > "b"); //false
console.log("Daemon" < "terminator"); //true
console.log(3 > 2); //true
console.log(3 >= 2); //true
console.log(4 < 8); //true

let number1=12;
let number2=12;
const istrue = number1>=number2;
console.log(istrue); 

let a, b;
a=b=25-10-5;  //b=10 a=b a=10
console.log(a,b);
//average of a and b
let avg=a+b/2;    //this not actual
let average=(a+b)/2;  //this is correct
console.log(avg);
console.log(average);

