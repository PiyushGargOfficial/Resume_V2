const textClassList = () => Array.from(document.querySelectorAll(".copyBtn"));

textClassList().forEach((text) => {
  text.addEventListener("click", copyText);
});

// copyText.addEventListener("click", copyPhone);

function copyText() {
  //   console.log(this.getAttribute("data-value"));
  const textArea = document.createElement("textarea");
  textArea.value = this.getAttribute("data-value");
  textArea.setAttribute("readonly", "");
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  //   console.log("Copied");
  document.body.removeChild(textArea);
}
