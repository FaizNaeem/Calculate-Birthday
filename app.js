var birthday= new Date();
 birthday.setDate(+prompt("Enter Your Birthday Date"));
 birthday.setMonth(+prompt("Enter Your BirthDay Month"));
 birthday.setFullYear(+prompt("Enter Your BirthDay Year"))
 birthday.setHours(+prompt("Enter your birthday hours"));
 birthday.setMinutes(+prompt("Enter your birthday minutes"));
 let g = new Date();
 let get = g.getTime() -birthday.getTime();
 document.write("you lost "+(get/(1000*60*60)).toFixed(0)+" minutes"+"<br>")
 document.write("you lost "+(get/(1000*60*60*24)).toFixed(0)+" Days"+"<br>")
 document.write("you lost "+(get/(1000*60*60*24*30)).toFixed(0)+" month"+"<br>")
 document.write("you lost "+(get/(1000*60*60*24*365.25)).toFixed(0)+" years")
 