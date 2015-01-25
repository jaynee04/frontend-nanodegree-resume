var formattedName = HTMLheaderName.replace("%data%", "Jaynee Joe");

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName)
