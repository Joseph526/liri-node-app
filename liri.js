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
var args = process.argv[2];

// Execute appropriate switch case
switch (args) {
    case "my-tweets":
        console.log("Twitter function under construction");
        break;
    case "spotify-this-song":
        console.log("Spotify this");
        break;
    case "movie-this":
        console.log("Movie this");
        break;
    case "do-what-it-says":
        console.log("Do what it says");
        break;
    default:
        console.log("Command not defined");
}