const defaults = {
  title: "Modal Title",
  message: "Real programmers count from 0.",
};
function Modal({ title = defaults.title, message = defaults.message } = {}) {
  let Div = document.createElement("dialog");
  Div.style = `
    border-radius: 10px;
    border-color: rgb(110, 10, 10);
  `;

  let Title = document.createElement("h3");
  Title.textContent = title;
  Title.style = `
    color: rgb(30, 30, 30);
    font-style: italic;
  `;

  let Message = document.createElement("p");
  Message.textContent = message;
  Message.style = `
    color: rgb(110, 110, 110);
  `;

  let CloseButton = document.createElement("button");
  CloseButton.textContent = "Close";
  CloseButton.style = `
    display: block;
    margin: 0 auto;
    color: rgb(70, 70, 70);
  `;
  CloseButton.addEventListener("click", () => Div.close());

  Div.append(Title, Message, CloseButton);

  return Div;
}

export default Modal;
