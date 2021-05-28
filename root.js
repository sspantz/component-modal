import Modal from "./Modal.js";

var root = document.getElementById("root");
var modal = Modal();
root.appendChild(modal);

var button = document.getElementById("clickme");
button.addEventListener("click", () => modal.showModal());
