const inputText = document.getElementById("input-text");
const listText = document.getElementById("list-id");

function addTask() {
  if (inputText.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputText.value;
    listText.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputText.value = "";
  saveData();
}

listText.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listText.innerHTML);
}
function showTask() {
  listText.innerHTML = localStorage.getItem("data");
}
showTask();
