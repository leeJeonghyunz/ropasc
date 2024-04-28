const scissor = document.getElementById("scissor");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const result_span = document.querySelector(".resultText");
const userSelected = document.getElementById("userSelected");
const comSelected = document.getElementById("comSelected");
let userScore = document.getElementById("userScore");
let comScore = document.getElementById("comScore");

const changeItem = (d) => {
  switch (d) {
    case "가위":
      userSelected.innerHTML = "✌🏻";
      break;
    case "바위":
      userSelected.innerHTML = "✊🏻";
      break;
    case "보":
      userSelected.innerHTML = "✋🏻";
      break;
  }
};

const changeComItem = (d) => {
  switch (d) {
    case "가위":
      comSelected.innerHTML = "✌🏻";
      break;
    case "바위":
      comSelected.innerHTML = "✊🏻";
      break;
    case "보":
      comSelected.innerHTML = "✋🏻";
      break;
  }
};

const changeResultText = (d) => {
  if (d === "Win") {
    userScore.innerHTML++;
  } else if (d === "Lose") {
    comScore.innerHTML++;
  }
  result_span.innerHTML = d;
};

const comPick = () => {
  const items = ["가위", "바위", "보"];
  const pick = Math.floor(Math.random() * 3);
  return items[pick];
};

const onClickItem = (item) => {
  const comItem = comPick();
  changeComItem(comItem);
  switch (item + comItem) {
    case "가위보":
    case "바위가위":
    case "보바위":
      changeResultText("Win");
      break;
    case "가위가위":
    case "바위바위":
    case "보보":
      changeResultText("Draw");
      break;
    case "가위바위":
    case "바위보":
    case "보가위":
      changeResultText("Lose");
      break;
  }
};

scissor.addEventListener("click", () => {
  onClickItem("가위");
  changeItem("가위");
});
rock.addEventListener("click", () => {
  onClickItem("바위");
  changeItem("바위");
});
paper.addEventListener("click", () => {
  onClickItem("보");
  changeItem("보");
});
