var query = window.location.search.substring(1); 
var vars = query.split("=");
var country = vars[1];


function showResponse(responseString) {
    document.getElementById('response').innerHTML += responseString;
}

function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyCjVuUBwaYTT7as_txQ0nDCwueRb84mNdE');
    search(country);
}

function search(country) {

    var request = gapi.client.youtube.search.list({
		part: 'snippet',
		regionCode: country,
		order: 'rating',
		maxResults: 5
    });
    
    request.execute(onSearchResponse);
	console.log(response);
}

function onSearchResponse(response) {
	var result1 = response.result.items[0].id.videoId;
	var result2 = response.result.items[1].id.videoId;
	var result3 = response.result.items[2].id.videoId;
	var result4 = response.result.items[3].id.videoId;
	var result5 = response.result.items[4].id.videoId;

	
	var title1 = response.result.items[0].snippet.title;
	var title2 = response.result.items[1].snippet.title;
	var title3 = response.result.items[2].snippet.title;
	var title4 = response.result.items[3].snippet.title;
	var title5 = response.result.items[4].snippet.title;

var titles1 = title1.length > 42 ? title1.substring(0, 38 - 3) + "..." : title1;
var titles2 = title2.length > 42 ? title2.substring(0, 38 - 3) + "..." : title2;
var titles3 = title3.length > 42 ? title3.substring(0, 38 - 3) + "..." : title3;
var titles4 = title4.length > 42 ? title4.substring(0, 38 - 3) + "..." : title4;
var titles5 = title5.length > 42 ? title5.substring(0, 38 - 3) + "..." : title5;
	

	
	showResponse("<div id='videos'><b>Top Videos in "+country+":</b><br><br>")
	showResponse("<iframe src='https://www.youtube.com/embed/"+result1+"'></iframe><br>");
	showResponse(titles1+"<br><br>");
	
	showResponse("<iframe src='https://www.youtube.com/embed/"+result2+"'></iframe><br>");
	showResponse(titles2+"<br><br>");
	
	showResponse("<iframe src='https://www.youtube.com/embed/"+result3+"'></iframe><br>");
	showResponse(titles3+"<br><br>");
	
	showResponse("<iframe src='https://www.youtube.com/embed/"+result4+"'></iframe><br>");
	showResponse(titles4+"<br><br>");
	
	showResponse("<iframe src='https://www.youtube.com/embed/"+result5+"'></iframe><br>");
	showResponse(titles5+"<br><br></div>");

}

