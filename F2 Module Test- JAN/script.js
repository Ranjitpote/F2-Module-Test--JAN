

const firstImg = document.getElementById("first-img");
const secondImg = document.getElementById("second-img");
const thirdImg = document.getElementById("third-img");
const fourthImg = document.getElementById("fourth-img");
const form = document.getElementById("form");
const dice = document.getElementById("dice");
const score = document.getElementById("score");
const prompt = document.getElementById("prompt");
const coupon = document.getElementById("coupon");
const couponText = document.getElementById("coupon-text");

let name, email, username;
let attempts = 0;

// for 1st img and form

firstImg.addEventListener("click", function () {
  form.style.display = "block";
  firstImg.style.pointerEvents = "none";

  const formSubmit = function (event) {
    event.preventDefault();
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    username = document.getElementById("username").value;
    form.style.display = "none";
    form.removeEventListener("submit", formSubmit);
  };

  form.addEventListener("submit", formSubmit);
});


//2nd img and user data

secondImg.addEventListener("click", function () {
  alert(`Name: ${name}\nUsername: ${username}`);
  secondImg.style.pointerEvents = "none";
});

//3rd img and roll dice game

thirdImg.addEventListener("click", function () {
  dice.style.display = "block";
  thirdImg.style.pointerEvents = "none";

  let sum = 0;
  let rolls = 0;

  const rollDice = function () {
    if (rolls === 3) {
      dice.style.display = "none";
      dice.removeEventListener("click", rollDice);
      if (sum > 10) {
        fourthImg.style.pointerEvents = "auto";
      } else if (attempts === 1) {
        prompt.style.display = "block";
      } else {
        attempts += 1;
        thirdImg.style.pointerEvents = "auto";
      }
    } else {
      rolls += 1;
      let randomNum = Math.floor(Math.random() * 6) + 1;
      sum += randomNum;
      score.innerText = "score:"+sum;
    }
  };

  dice.addEventListener("click", rollDice);
});


// 4th img & coupon

fourthImg.addEventListener("click", function () {
  coupon.style.display = "block";
  fourthImg.style.pointerEvents = "none";

  let couponCode = "";
  for (let i = 0; i < 12; i++) {
    couponCode += Math.floor(Math.random() * 10);
  }
  couponText.innerText = "YOUR COUPON NUMBER:"+ couponCode;
});



