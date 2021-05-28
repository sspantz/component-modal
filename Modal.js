function Modal(
  config = {
    title: "Modal Title",
    message: "Real programmers count from 0.",
  }
) {
  const { title, message } = config;

  let Div = document.createElement("dialog");

  let Title = document.createElement("h3");
  Title.textContent = title;

  let Message = document.createElement("p");
  Message.textContent = message;

  Div.appendChild(Title);
  Div.appendChild(Message);

  return Div;
}

console.log("OK!");

export default Modal;
