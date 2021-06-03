//Rainy
function getVideo() {
    $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
        key: 'AIzaSyDSHivaODuCFjaTkkOycOiZrgAlMhkM654',
        q: "watch?v=5qap5aO4i9A",
        part: 'snippet',
        maxResults: 1,
        type: 'video',
        videoEmbeddable: true,
    },
    success: function(data){
        embedVideo(data)
    },
    error: function(response){
        console.log("Request Failed");
    }
    });
}
function embedVideo(data) {
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    $('h3').text(data.items[0].snippet.title)
    $('.description').text(data.items[0].snippet.description)
}
getVideo();

//Sunny
function getVideo2() {
    $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
        key: 'AIzaSyDSHivaODuCFjaTkkOycOiZrgAlMhkM654',
        q: "watch?v=w6MiJUTZ6n8&t=15s",
        part: 'snippet',
        maxResults: 1,
        type: 'video',
        videoEmbeddable: true,
    },
    success: function(data){
        embedVideo(data)
    },
    error: function(response){
        console.log("Request Failed");
    }
    });
}
function embedVideo(data) {
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    $('h3').text(data.items[0].snippet.title)
    $('.description').text(data.items[0].snippet.description)
}
getVideo2();

//Snowy
function getVideo3() {
    $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
        key: 'AIzaSyDSHivaODuCFjaTkkOycOiZrgAlMhkM654',
        q: "watch?v=6GRdLGKYKkE&ab_channel=alexrainbirdMusic",
        part: 'snippet',
        maxResults: 1,
        type: 'video',
        videoEmbeddable: true,
    },
    success: function(data){
        embedVideo(data)
    },
    error: function(response){
        console.log("Request Failed");
    }
    });
}
function embedVideo(data) {
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    $('h3').text(data.items[0].snippet.title)
    $('.description').text(data.items[0].snippet.description)
}
getVideo3();

//Snowy
function getVideo4() {
    $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
        key: 'AIzaSyDSHivaODuCFjaTkkOycOiZrgAlMhkM654',
        q: "watch?v=MCDRoNgVWmM&ab_channel=musicillusion02musicillusion02",
        part: 'snippet',
        maxResults: 1,
        type: 'video',
        videoEmbeddable: true,
    },
    success: function(data){
        embedVideo(data)
    },
    error: function(response){
        console.log("Request Failed");
    }
    });
}
function embedVideo(data) {
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    $('h3').text(data.items[0].snippet.title)
    $('.description').text(data.items[0].snippet.description)
}
getVideo4();



switch(WeatherType) {
    case x:
    getVideo()
    break;
    case y:
    getVideo2()
    break;
    default:
    case z:
    getVideo3()
    case w:
    getVideo4()
}