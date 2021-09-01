// VARRIABLES
const textInput = document.getElementById("textInput");
const copyBtn = document.getElementById("copyBtn");

// FUNCTIONS
const copyText = (text) => {
  //COPY TEXT TO CLIPBOARD
  if (navigator.clipboard.writeText(text)) {
    alert("text copied");
  } else {
    alert("something went wrong");
  }
};

// EVENTS
copyBtn.addEventListener("click", () => {
  copyText(textInput.value);
});
