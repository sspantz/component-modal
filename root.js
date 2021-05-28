import Modal from "./Modal.js";

var root = document.getElementById("root");
var modal = Modal();
root.appendChild(modal);

var button = document.querySelector("button");
button.addEventListener("click", () => modal.showModal());
