var API_KEY = 'AIzaSyA1mnNSkE4Wo9KvNLetrFSpTpqJtIISoT8';

function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"]
    }).then(function () {
        console.log("YouTube Data API client initialized");
    });
}

function getDownloadLink() {
    var videoId = document.getElementById('videoId').value;

    gapi.client.youtube.videos.list({
        part: 'contentDetails',
        id: videoId
    }).then(function(response) {
        var videoDetails = response.result.items[0].contentDetails;
        var videoDuration = parseVideoDuration(videoDetails.duration);
        var downloadLink = 'https://www.youtubepp.com/watch?v=' + videoId + '&t=' + videoDuration;
        
        document.getElementById('downloadLink').innerHTML = '<a href="' + downloadLink + '" target="_blank">Download Video</a>';
    }, function(error) {
        console.error('Error fetching video details', error);
        document.getElementById('downloadLink').innerHTML = 'Error fetching video details';
    });
}

function parseVideoDuration(duration) {
    var match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    var hours = (parseInt(match[1]) || 0);
    var minutes = (parseInt(match[2]) || 0);
    var seconds = (parseInt(match[3]) || 0);

    return hours * 3600 + minutes * 60 + seconds;
}
