const transalateBtn = document.getElementById("transalateBtn");
const transalatingInput = document.getElementById("input");
const translatingOutput = document.getElementById("output");
const serverURL = "https://api.funtranslations.com/translate/minion.json";
const generateServerURL = () => {
  const input = transalatingInput.value;
  if (!input.trim()) {
    alert("Please enter some text");
    return;
  }
  return `${serverURL}?text=${input}`;
};
const errorHandler = () => {
  alert("Something went wrong");
};
const clickHandler = async () => {
  const url = generateServerURL();
  if (!url) {
    return;
  }
  try {
    const responseBody = await fetch(url);
    const responseJson = await responseBody.json();
    translatingOutput.innerText = responseJson.contents.translated;
  } catch (error) {
    console.log(error);
    errorHandler(error);
  }
};
transalateBtn.addEventListener("click", clickHandler);
