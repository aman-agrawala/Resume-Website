/*
This is empty on purpose! Your code to build the resume will go here.
 */
 //$("#main").append(["Aman"]);
 
 //var awesomeThoughts  = "I am Aman and I am AWESOME!"
 //console.log(awesomeThoughts);

//var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%","Aman Agrawala");
var formattedRole = HTMLheaderRole.replace("%data%","Software Engineer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
