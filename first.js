// finding particular character from string
 let str="Mr. Martin was good rider";
 let n =str.search("w");
 console.log(n);


// converting minute to second
function convertMinutestoSeconds(minutes) 
{
  return Math.floor(minutes * 60);
}
var minutesToSeconds = convertMinutestoSeconds(1); // convert minutes to second javascript 
console.log( "Result of converting minutes to seconds :- " + minutesToSeconds ); 

// printing array in reverse order
function fun1(){
var arry=["abc","def","ghi"];
document.write(arry);

var new_arry=arry.reverse()
document.write("<br>");
document.write(new_arry);
}
fun1();

// search for element in string
let alpha=["abc","def","ghi"];
let a= alpha.includes("def");
let a1= alpha.indexOf("def");
console.log(a);
console.log(a1);
