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
		maxResults: 1
    });
    request.execute(onSearchResponse);
	console.log(response);
}

function onSearchResponse(response) {
	var result1 = response.result.items[0].id.videoId;
	var title1 = response.result.items[0].snippet.title;
	var titles1 = title1.length > 42 ? title1.substring(0, 38 - 3) + "..." : title1;

	showResponse("<iframe src='https://www.youtube.com/embed/"+result1+"'></iframe><br>");
	showResponse(titles1+"<br><br>");
	showResponse("<a href='countries.html?country="+country+"' target='_parent'>See the top 5 videos in "+country+" </a> ");
}

