"use strict";

const filesInfo = document.querySelector(".text-editor__content"),
  hintEl = document.querySelector(".text-editor__hint");
filesInfo.addEventListener("drop", onFilesDrop);
filesInfo.addEventListener("dragover", showHint);

function onFilesDrop(event) {
  event.preventDefault();
  console.log(event.dataTransfer.files);
  const file = Array.from(event.dataTransfer.files)[0];
  setTextareaContent(file);
}

function showHint() {
  event.preventDefault();
  hintEl.classList.add("text-editor__hint_visible");
}

// function handleFileChange(event) {
//   setTextareaContent(event.currentTarget.files[0]);
// }

function setTextareaContent(file) {
  const reader = new FileReader();
  filesInfo.value = "";
  hintEl.classList.remove("text-editor__hint_visible");
  reader.addEventListener("load", event => {
    filesInfo.value = event.target.result;
  });
  reader.readAsText(file);
}
