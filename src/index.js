import "./styles.css";

const onClickAdd = () => {
  const inputTextElemennt = document.getElementById("add-text");
  alert(inputTextElemennt.value);
  inputTextElemennt.value = "";

  alert(inputTextElemennt.value);
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());