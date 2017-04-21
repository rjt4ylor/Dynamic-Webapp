var query = window.location.search.substring(1); 
var vars = query.split("=");
var country = vars[1];
document.write(country);


function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
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
	var result6 = "c4BLVznuWnU";
	
	
	var results1 = result1.replace(/['"]+/g, '');
	
	document.write('<iframe width="854" height="480" src="https://www.youtube.com/embed/-qpiVgg3Y4c?ecver=1" frameborder="0" allowfullscreen></iframe>');
	
    
	showResponse("<li>" +result2+"ddd</li>");
	showResponse("<li>"+result3+"</li>");
	showResponse("<li>"+result4+"</li>");
	showResponse("<li>"+result5+"</li></ul>");
	

}
