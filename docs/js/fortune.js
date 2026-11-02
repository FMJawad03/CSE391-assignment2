const fortunes = [
    "Believe in yourself and good things can happen.",
    "A new opportunity may be closer than you think.",
    "Small steps can lead to big changes.",
    "Kindness will bring brightness to someone's day.",
    "Your patience will be rewarded.",
    "Today is a good day to learn something new.",
    "A challenge can become an opportunity.",
    "Trust the effort you have put in.",
    "A helpful conversation may inspire you.",
    "Keep going; progress takes time.",
    "Your creativity can solve a difficult problem.",
    "Good things often begin with a simple idea."
];

const fortuneBox = document.getElementById("fortuneBox");

const randomIndex = Math.floor(Math.random() * fortunes.length);

fortuneBox.textContent = fortunes[randomIndex];

const style1 = {
    color: "#ffffff",
    backgroundColor: "#c0392b",
    borderColor: "#239b56",
    fontSize: "20px",
    fontFamily: "Georgia, serif"
};

const style2 = {
    color: "#f5cba7",
    backgroundColor: "#6c3483",
    borderColor: "#e8aeb7",
    fontSize: "19px",
    fontFamily: "Verdana, sans-serif"
};

const style3 = {
    color: "#f9e79f",
    backgroundColor: "#2874a6",
    borderColor: "#d4ac0d",
    fontSize: "21px",
    fontFamily: "Palatino Linotype, sans-serif"
};

const style4 = {
    color: "#784212",
    backgroundColor: "#abebc6",
    borderColor: "#154360",
    fontSize: "22px",
    fontFamily: "Trebuchet MS, sans-serif"
};


function applyStyle(style) {
    fortuneBox.style.color = style.color;
    fortuneBox.style.backgroundColor = style.backgroundColor;
    fortuneBox.style.borderColor = style.borderColor;
    fortuneBox.style.fontSize = style.fontSize;
    fortuneBox.style.fontFamily = style.fontFamily;
}


document.getElementById("redButton").addEventListener("click", function () {
    applyStyle(style1);
});

document.getElementById("purpleButton").addEventListener("click", function () {
    applyStyle(style2);
});

document.getElementById("blueButton").addEventListener("click", function () {
    applyStyle(style3);
});

document.getElementById("greenButton").addEventListener("click", function () {
    applyStyle(style4);
});