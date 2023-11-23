function getDownloadLink() {
    var videoId = document.getElementById('videoId').value;

    var downloadLink = 'https://www.youtubepp.com/watch?v=' + videoId;
    
    document.getElementById('downloadLink').innerHTML = '<a href="' + downloadLink + '" target="_blank">Download Video</a>';
}
