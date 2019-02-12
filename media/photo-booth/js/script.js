"use strict";

const appEl = document.querySelector(".app");
const listEl = document.querySelector(".list");
const errorMessageEl = document.querySelector("#error-message");
const takePhotoEl = document.querySelector("#take-photo");
const videoEl = document.createElement('video');
appEl.appendChild(videoEl);

var constraints = { audio: false, video: { width: 1280, height: 720 } }; 

navigator.mediaDevices.getUserMedia(constraints)
.then(function(mediaStream) {
  videoEl.srcObject = mediaStream;
  videoEl.onloadedmetadata = function(e) {
    videoEl.play();
  };
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.