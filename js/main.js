var captchaTextEl = document.getElementById("captchaText");
var tryAgainBtn = document.getElementById("try");
var checkBtn = document.getElementById("check");
var input = document.getElementById("input");

// console.log(captchaTextEl);
// console.log(input);
// console.log(tryAgainBtn);
// console.log(checkBtn);

var correctAnswer = "";
function generateCAPATCHA() {
  var result = "";
  var chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];
  for (var i = 1; i <= 6; i++) {
    result += chars[Math.trunc(Math.random() * chars.length)];
  }
  correctAnswer = result;
  captchaTextEl.innerHTML = result;
}
generateCAPATCHA();

function checkAnswer() {
  if (input.value === correctAnswer) {
    alert("Congratulations, You are a human ❤");
  } else {
    alert("Try again, Robots are not allowed to be here ❌");
  }
}

tryAgainBtn.onclick = generateCAPATCHA;
checkBtn.onclick = checkAnswer;
