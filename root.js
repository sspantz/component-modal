import Modal from "./Modal.js";

var root = document.getElementById("root");
var modal = Modal({
  title: "About programmer",
  // message: `UNIX is user friendly...
  // It's just very particular about who its friends are.`,
});
root.appendChild(modal);

var button = document.getElementById("clickme");
button.addEventListener("click", () => modal.showModal());
