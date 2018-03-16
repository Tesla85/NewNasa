// console.log("Hi")
// gapi.load('client', function () {
//     gapi.client.init({
//         "apiKey": "AIzaSyDmUrAQsG5BGpvJOlVy8Ch4Odkg8anh2I4"
//     });
// });
var queryParam = document.location.search
console.log(queryParam);

if (queryParam) {
    displayImages(queryParam);
    // displayVideos(queryParam);
}
else {
};

// AJAX call to get the images from the NASA API
function displayImages(queryParam) {

    var queryURL = "https://images-api.nasa.gov/search" + queryParam;

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // The images from the NASA API to show up on the results page
        .then(function (response) {
            console.log(response.collection.items[1].links[0].href);

            for (var i = 0; i < 5; i++) {

                var nasaImageDiv = $("<div>");
                var nasaImageResult = $("<img>");
                nasaImageResult.attr("src", response.collection.items[i].links[0].href);

                $(".results-image").append(nasaImageResult);
            };
        });
};

//videos from YouTube API to show up in results page
function displayVideos(queryParam) {
    console.log(queryParam)

    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + queryParam

    var userInput = "";

    gapi.client.request({
        "path": "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + queryParam
    }).then(function (response) {
        console.log(response);
    })

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // The images from the NASA API to show up on the results page
        .then(function (response) {
            console.log(response.userInput.results.items[1].id.videoId[1]);

            for (var i = 0; i < 5; i++) {

                var nasaVideoDiv = $("<div>");
                var nasaVideoResult = $("<iframe>");
                nasaVideoResult.attr("src", response.userInput.results.items[1].id.videoId[1]);

                $(".results-videos").append(nasaVideoResult);
            };
        });
}

$("button[type=submit]").click(function (event) {
    event.preventDefault();

    var keyword = $("#user-input").val().trim();
    if (!keyword) {
        alert("Do I look like a mind reader? Please enter a keyword.");
        return;
    }

});

$("#search-button").on("click", function () {
    event.preventDefault();
    userInput = $("#user-input").val().trim();
    console.log(userInput);

    window.location.href = "./results.html?q=" + userInput;

    $("#user-input").val("");
});

// // Global variables

// // Reloads a new page and a search within 

// // Nasa API return description to populate the id ("#description-box)

// // Click event Thumbs-up increasing voting rate for specific image ("#thumbs-up")

// // AJAX call for Nasa API

// // AJAX call for the Youtube API

// // Media queries need to be implemented
