function downloadVideo() {
    var videoUrl = document.getElementById('videoUrl').value;

    // Construct a download link (replace 'youtubepp.com' with your preferred download service)
    var downloadLink = 'https://www.youtubepp.com/watch?v=' + getVideoId(videoUrl);
    window.location.href = downloadLink;
}

function getVideoId(url) {
    // Extract video ID from various YouTube video URL formats
    var regex = /[?&]v=([^?&]+)/;
    var match = url.match(regex);

    return match && match[1] ? match[1] : null;
}
