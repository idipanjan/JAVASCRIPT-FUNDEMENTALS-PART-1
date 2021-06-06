//variables have objects and primitive two type of values
/*
let me={'name':'Dip', 'age':21};   //object data
let myage=21;                      //primitive data

*/

/*

premitive data type

1.Numbers  //floating point numbers or normal integers (int+double all)
2.String   //String
3.Boolean  //true or flase

4.Undefined   // let children
5.Null  //empty value
6.BigInt
7.Symbol
*/

true;
console.log(true);
let isjavascript=true;
console.log(isjavascript);
console.log("\n");
console.log(typeof(isjavascript));
console.log(typeof(true));
console.log("\n");
console.log(typeof 'Daemon');
console.log(typeof "Daemon");

console.log(typeof 12);

console.log("\n");

//we can change the data type and value sof variable if we use 
// let keyword in declaration of variavle
console.log(typeof(isjavascript));   //boolean
isjavascript='!yess';            
console.log(typeof(isjavascript));  //string

//undefined
let date;
console.log(date);
console.log(typeof(date));  //uundefined

//number
var year=2021;
console.log(typeof(year));  //number

var year='2021';
console.log(typeof(year));  //string

//null
console.log(typeof null);   //object

//boolean concept
//1 is true
// 0 is fasle

let a=0;
let b=1;

if (a){
    console.log("yes");
}
else{
    console.log("No");
}

if (b){
    console.log("yes");
}

else{
    console.log("No");
}


// let  vs const vs var

let age=30;
age=31;       //reassigning new data to a variable

const birthYear=1999;  //not supposed to change
//birthYear=2021;     this is illegal


//var is a old way (same as let) ressigning is allowed
var j='programmer';
j='developer';

lastname='Singhas';
console.log(lastname);







