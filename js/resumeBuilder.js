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

var bio = {
	"name" : "Aman Agrawala",
	"role" : "Software Engineer",
	"contacts" : { 
	"mobile" : "210-459-1737",
	"email" : "amanagrawala@gmail.com",
	"github" : "https://github.com/aman-agrawala",
	"Location" : "Detroit"
	},
	"welcome_message" : "Yesterday is but today's memory, and tomorrow is today's dream. - Khalil Gibran",
	"bioPic" : "https://avatars2.githubusercontent.com/u/12983322?v=3&u=b93f55406f2a9d7061eeaa3923baa6db1d062dbf&s=400",
	"Skills" : ["Python, Flask, SQLAlchemy, PostgreSQL, Git, HTML/CSS, OAuth 2.0, and MatLab/Simulink"]
};

var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.Location);
var fromattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcome_message);
var formattedSkills = HTMLskills.replace("%data%",bio.Skills);
//var formattedSkillsStart = HTMLskillsStart.$("")

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);

$("#header").append(formattedPic);
$("#header").append(fromattedWelcomeMsg);
//$("#header").append(formattedSkillsStart);

var work = {};
work.position = "Battery Controls Engineer";
work.employer = "General Motors";
work.years_worked = "2";
work.city = "Warren";

var education = {}
education["name"] = "UC Berkeley";
education["years_attended"] = 4;
education["school_city"] = "Berkeley";

$("#workExperience").append(work["position"]);
$("#education").append(education.name);