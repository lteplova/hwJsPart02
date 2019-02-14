"use strict";

const logoEls = document.querySelectorAll(".logo");
const trashEl = document.querySelector("#trash_bin");
let movedPiece = null;

document.addEventListener("dragstart", onDragStart);
document.addEventListener("dragend", onDrop);

function onDragStart(event) {
  if (event.target.classList.contains("logo")) {
    movedPiece = event.target;
    event.dataTransfer.setData("text", "one");
  }
}

function onDrop(event) {
  const crossEl = document.elementFromPoint(event.pageX, event.pageY);
  if (crossEl.id == trashEl.id) {
    movedPiece.style.display = "none";
  }
  movedPiece.classList.remove("moving");
  movedPiece = null;
}
