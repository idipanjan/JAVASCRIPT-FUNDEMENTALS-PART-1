//decision making(if, else if, else )

//agevalidation
function agevalidation() {
  const age = 21;
  //const age=11;
  if (age >= 18) {
    console.log("Cheers!! you are in");
  } else {
    console.log("Sorry...Come after " + (18 - age) + " years");
  }
}
agevalidation();



//leapyear validation
function leapyearvalidation() {
  let year1 = 2021;
  //let year2=2021;
  if (year1 % 400 == 0) {
    console.log("leap year");
  } 
  
  else if (year1 % 400 !== 0 && year1 % 100 != 0) 
  {
    if (year1 % 4 == 0) {
      console.log("leap year");
    } else {
      console.log(" not leap year");
    }
  }

  else
   {
    console.log(" not leap year");
   }
}
leapyearvalidation();
