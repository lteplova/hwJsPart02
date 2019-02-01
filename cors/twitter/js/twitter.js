"use strict";

const wallpaperEl = document.querySelector('[data-wallpaper]');
const usernameEl = document.querySelector('[data-username]');
const descriptionEl = document.querySelector('[data-description]');
const picEl = document.querySelector('[data-pic]');
const tweetsEl = document.querySelector('[data-tweets]');
const followersEl = document.querySelector('[data-followers]');
const followingEl = document.querySelector('[data-following]');

function render(tweet) {
  wallpaperEl.src = tweet.wallpaper;
  picEl.src = tweet.pic;
  usernameEl.innerHTML = tweet.username;
  descriptionEl.innerHTML = tweet.description;
  tweetsEl.innerHTML = tweet.tweets;
  followersEl.innerHTML = tweet.followers;
  followingEl.innerHTML = tweet.following;
}

function loadData(url) {
    var script = document.createElement('script');
    script.src = `${url}?jsonp=render`;
    document.getElementsByTagName('head')[0].appendChild(script);
}

loadData("https://neto-api.herokuapp.com/twitter/jsonp");
