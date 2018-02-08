require('dotenv').config();
var keys = require('./keys.js');

var Twitter = require('twitter');
// var Spotify = require('node-spotify-api');

// var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

//Clarify what is process.argv???
var arg = process.argv
var userTweet

var command = arg[2];


if (command == "tweets") {
  twitter();
} else {
  console.log('Give a command!');
}

//Twitter API call
function twitter() {
//Twitter functin from NPM goes here
client.get('statuses/user_timeline', {user_id:'NickFolesMVP9'}, function(error, tweets, response) {

  if (error) {
    console.log(error);
  } else {
    for (var i = 0; i < tweets.length; i++) {
      userTweet = new Object ();
      userTweet.createdAt = tweets[i].created_at;
      userTweet.text = tweets[i].text;

      console.log(userTweet);
    }
  }
})
}
