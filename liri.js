// Declare global requirements
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");
var request = require("request");

// Declare new instance of each API
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// Capture input from CLI
var args = process.argv;
var appInput = "";
for (var i = 3; i < args.length; i++) {
    appInput += args[i] + "+";
}

// Declare functions
var liri = {
    spotifyThisSong: function() {
        console.log("Spotify object working");
        spotify.search({ type: 'track', query: appInput }, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            console.log(data);
        });
    },
    movieThis: function() {
        if (!args[3]) {
            appInput = "Mr. Nobody";
        }
        var queryUrl = "http://www.omdbapi.com/?t=" + appInput + "&y=&plot=short&apikey=trilogy";
        request(queryUrl, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                var movieInfo = JSON.parse(body);
                console.log(
                    "Title: " + movieInfo.Title + 
                    "\nYear: " + movieInfo.Year +
                    "\n" + movieInfo.Ratings[0].Source + " rating: " + movieInfo.Ratings[0].Value +
                    "\n" + movieInfo.Ratings[1].Source + " rating: " + movieInfo.Ratings[1].Value +
                    "\nCountry: " + movieInfo.Country +
                    "\nLanguage: " + movieInfo.Language +
                    "\nPlot: " + movieInfo.Plot +
                    "\nActors: " + movieInfo.Actors
                );
            }
        });
    }
};

// Execute appropriate switch case
switch (args[2]) {
    case "my-tweets":
        console.log("Twitter function under construction");
        break;
    case "spotify-this-song":
        console.log("============\nSpotify this\n============");
        liri.spotifyThisSong();
        break;
    case "movie-this":
        console.log("==========\nMovie this\n==========");
        liri.movieThis();
        break;
    case "do-what-it-says":
        console.log("Do what it says");
        break;
    default:
        console.log("Command not defined. Please try again.");
}