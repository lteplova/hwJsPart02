"use strict";

const songs = [
  {
    title: "LA Chill Tour",
    url:
      "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Chill%20Tour.mp3"
  },
  {
    title: "This is it band",
    url:
      "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This%20is%20it%20band.mp3"
  },
  {
    title: "LA Fusion Jam",
    url:
      "https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Fusion%20Jam.mp3"
  }
];

let current = 0;
let isPlayed = false;

const mediaPlayer = document.getElementsByClassName("mediaplayer")[0];
const audio = mediaPlayer.getElementsByTagName("audio")[0];
const btnPlayState = document.getElementsByClassName("playstate")[0];
const btnNext = document.getElementsByClassName("next")[0];
const btnBack = document.getElementsByClassName("back")[0];
const btnStop = document.getElementsByClassName("stop")[0];
const titleSong = document.getElementsByClassName("title")[0];

//включение проигрывания
btnPlayState.onclick = function() {
  isPlayed ? audio.pause() : audio.play();
  mediaPlayer.classList.toggle("play");
  isPlayed = !isPlayed;
};

//остановка проигрывания
btnStop.onclick = function() {
  audio.pause();
  audio.currentTime = 0;
  mediaPlayer.classList.remove("play");
  isPlayed = false;
};

//переход на следующий трек
function next() {
  current == songs.length - 1 ? (current = 0) : current++;
  audio.src = songs[current].url;
  isPlayed ? audio.play() : audio.pause();
  titleSong.title = songs[current].title;
}

//переход на предыдущий трек
function prev() {
  current == 0 ? (current = songs.length - 1) : current--;
  audio.src = songs[current].url;
  isPlayed ? audio.play() : audio.pause();
  titleSong.title = songs[current].title;
}

//ловим окончание песни и переходим на следующую
audio.onended = function() {
  next();
};

btnNext.onclick = next;
btnBack.onclick = prev;
