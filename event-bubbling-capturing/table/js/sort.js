"use strict";

function handleTableClick(event) {
  if (!event.target.classList.contains('prop__name')) return;
  
  const tableEl = document.querySelector("table");
  const header = event.target;
  header.dataset.dir ? (header.dataset.dir *= -1) : (header.dataset.dir = 1);
  tableEl.dataset.sortBy = header.dataset.propName;
  sortTable(tableEl.dataset.sortBy, header.dataset.dir);
  
}
