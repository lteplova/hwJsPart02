'use strict';

const dataNameEl = document.querySelector('[data-name]');
const dataDescriptionEl = document.querySelector('[data-description]');
const dataPicEl = document.querySelector('[data-pic]');
const dataPositionEl = document.querySelector('[data-position]');
const dataTechnologiesEl = document.querySelector('[data-technologies]');
const dataFollowingEl = document.querySelector('[data-following]');


function render(profile) {
    dataNameEl.innerHTML = profile.name;
    dataDescriptionEl.innerHTML = profile.description;
    dataPicEl.src = profile.src;
    dataPositionEl.innerHTML = profile.position;
   // dataFollowingEl.innerHTML = profile.following;
    dataTechnologiesEl.innerHTML = profile.technologies; 
    console.log(profile);
  }
  
//   function loadData(url) {
//       return new Promise ((done, fail) => {
//           window.callback = done;
//           const script = document.scripts[0].cloneNode();
//           script.src = `${url}?jsonp=callback`;
//           document.body.appendChild(script);
//       });
//   }

  function loadData(url) {
      var script = document.createElement('script');
      script.src = `${url}?jsonp=render`;
      document.getElementsByTagName('head')[0].appendChild(script);
  }
  
 loadData("https://neto-api.herokuapp.com/profile/me");
 
