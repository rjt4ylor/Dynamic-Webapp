function showResponse(responseString) {
	document.getElementById("list").innerHTML += responseString;
}

var countries = [
['UK', 		54, -2,	"GB"],
['Norway', 	62, 10,	"NO"],
['France', 	46, 2, 	"FR"],
['Germany', 51, 9,	"DE"],
['Spain', 	40, -4, "ES"],
['Greece',	39, 22,	"GR"],
['Ireland',	53, -8,	"IE"],
['Portugal',39.3,-8,"PT"],
['Belgium',	50.5, 4,"BE"],
['Poland',	52, 20,	"PL"],
['Austria',	47.2, 13.2,	"AT"],
['Italy',	42.5, 12.5,	"IT"],
['Sweden',	62, 15,	"SE"],
['Finland',	64, 26,	"FI"],
]
		
var output = "<ul>";
for(i=0;i<countries.length;i++){
	output += "<li><a target='topiframe' href='full.html?country="+countries[i][3]+"' >"+countries[i][0]+"</a></li>";
}
output += "</ul>"
showResponse(output);