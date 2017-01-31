function random() {
  var ran = (Math.floor(Math.random() * 100) +1)
  console.log(ran)
  var userInput = prompt("What's your guess of the number?", "")
  var guessNum = parseInt(userInput)
  if(guessNum === ran) {
    alert("you won!")
  } else if(guessNum < ran) {
    alert("your guess is too small")
  } else if(guessNum > ran) {
    alert("your guess is too high")
  }

  if(userInput === "exit") {
    return null
  }
}


function stringIndices() {
  var wordsToParse = prompt("Enter words to parse", "")
  var change = document.getElementById("change").innerHTML = wordsToParse
  var regEx = /[\W_]/g
}

function checkTheIndices() {

}
