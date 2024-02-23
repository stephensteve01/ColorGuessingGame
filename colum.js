//const innerDiv = document.getElementById("innerDiv");
//innerDiv.addEventListener("mouseover", changeRed);
//innerDiv.addEventListener("mouseout", changeWhite);
//innerDiv.addEventListener("mousedown", changeBlue);
//innerDiv.addEventListener("mouseup", changeYellow);

// for column one//
const columOne = document.getElementById("columOne");
columOne.addEventListener("mouseover", changeBrown);
columOne.addEventListener("mousedown", changeBlack);
columOne.addEventListener("mouseout", changeBlue);

function changeBrown(){
    columOne.style.backgroundColor = "Brown";
}
    function changeBlack(){
        columOne.style.backgroundColor = "Black";
    }

        function changeBlue(){
            columOne.style.backgroundColor = "Blue"; 
     
}
document.getElementById("myButton").onclick = function(){
    alert("If your guess color is = Black color On Click, You \u{1F600} WIN esl You LOSE");
}
// for clolum two
const columTwo = document.getElementById("columTwo");
columTwo.addEventListener("mouseover", changeRed);
columTwo.addEventListener("mousedown", changeGreen);
columTwo.addEventListener("mouseout", changeYellow);

function changeRed(){
    columTwo.style.backgroundColor = "Red";
}
function changeGreen(){
    columTwo.style.backgroundColor = "Green";
}

    function changeYellow(){
        columTwo.style.backgroundColor = "Yellow";
 
}
document.getElementById("myAlert").onclick = function(){
    alert("If your guess color is = Green color On Click, You \u{1F600} WIN esl You LOSE");
}
// for clolum three
const columThree = document.getElementById("columThree");
columThree.addEventListener("mousedown", changeCyan);
columThree.addEventListener("mouseout", changeGray);
columThree.addEventListener("mouseover", changeWhite);

function changeCyan(){
    columThree.style.backgroundColor = "Cyan";
}
function changeGray(){
    columThree.style.backgroundColor = "Gray";
}
function changeWhite(){
    columThree.style.backgroundColor = "white";
}
document.getElementById("myAlertt").onclick = function(){
    alert("If your guess color is = Cyan'blue' color On Click, You \u{1F600} WIN esl You LOSE");
}
// for clolum four
const columFour = document.getElementById("columFour");
columFour.addEventListener("mousedown", changePink);
columFour.addEventListener("mouseout", changeOrange);
columFour.addEventListener("mouseover", changePurple);

function changePink(){
    columFour.style.backgroundColor = "Purple";
}
function changeOrange(){
    columFour.style.backgroundColor = "Orange";
}
function changePurple(){
    columFour.style.backgroundColor = "Pink";
}
document.getElementById("myAlerttt").onclick = function(){
    alert("If your guess color is = Purple color On Click, You \u{1F600} WIN esl You LOSE");
}
/* this code below is an alert and promt code.
 document.getElementById("myButton").onclick = function(){
    alert("If your guess color is = black color click OK! Els skip");
  
  let person = prompt("Which means....", "You Win \u{1F600}  Els you Lose");
  let text;
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  }*/