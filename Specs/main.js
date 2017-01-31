function random() {
  const ran = (Math.floor(Math.random() * 100) +1)
  console.log(ran)
  let userInput = prompt("What's your guess of the number?", "")
  let guessNum = parseInt(userInput)

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


var splitWords;
var checkIndex;
var num;

function stringIndices() {
  let wordsToParse = prompt("Enter words to parse", "")
  let regEx = wordsToParse.replace(/[W_]/g, " ")
  let change = document.getElementById("change").innerHTML = wordsToParse
  splitWords = regEx.split(" ")
}


function checkTheIndices() {
  checkIndex = prompt("give a number to check its index", "")
  num = parseInt(checkIndex)

  var textNode = document.createTextNode(splitWords[num - 1])
  let li = document.createElement('li')
  li.appendChild(textNode)
  document.getElementById("change").appendChild(li)
}


function disemvowel() {
  let wordsToDisemvowel = document.getElementById("words")
  let lowerWords = (wordsToDisemvowel.value).toLowerCase()
  let regEx = lowerWords.replace(/[0-9\W_*$]/g, "")
  let emptyArray = []

  for(let i = 0; i < regEx.length; i++) {
    if(regEx[i] !== "a" && regEx[i] !== "e" && regEx[i] !== "i" && regEx[i] !== "u" && regEx[i] !== "o") {
      emptyArray.push(regEx[i])
    }
  }

  let disemvowel = emptyArray.join("")
  return alert(disemvowel)

}
