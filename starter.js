//difference between Array and object in js
/*
var a=["Dip", "FSE", 1999];
console.log(a[0]);

var person={
            Name:"Erix",
            id: 107,
            dept:"QEA"
            };
console.log(person.Name);
console.log(person["dept"]);

*/


var name="dipanjan";   //string
var age=21;      //number
var s=name.substring(1,4);  //string
console.log(`name is: ${name}`);
console.log(`subname is: ${s}`);
console.log(`my age: ${age}`);

var str=name.split("");  //object
console.log(str);      //object
console.log(typeof(str));  //object
console.log(typeof(name));  //string

console.log(name[0]);    
console.log(str[0]);
