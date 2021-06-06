//strings and date
const firstname='Dipanjan';
const job='Developer';
const birthyear=1999;

let today=new Date();
let currentDay = today.getDate();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const daemon="Hi " + "I am " + firstname + 
              " a "+ (today.getFullYear() - birthyear) + " years old " + job + " !!";

console.log(daemon);

console.log("\n");


const newname='Daemon';
console.log(`My new name is: ${newname}, \n\  My job is a: ${job}`);

console.log("\n");

console.log(`String 
multi 
lines`);

