var userInput, guess, randomNum;

function randomNumber() {
  randomNum = (Math.floor(Math.random() * 100) +1)
  console.log(randomNum)
}

function guessTheNum() {
  userInput = prompt("What's your guess of the number?", "")
  guessNum = parseInt(userInput)
  if(guessNum === randomNum) {
    alert("you won!")
  } else if(guessNum < randomNum) {
    alert("your guess is too small")
  } else if(guessNum > randomNum) {
    alert("your guess is too high")
  }

  if(userInput === "exit") {
    return null
  }
}

var splitWords, checkIndex, num;

function stringIndices() {
  let wordsToParse = prompt("Enter words to parse", "")
  let newWordsToParse = wordsToParse.replace(/[W_]/g, " ")
  let change = document.getElementById("change").innerHTML = wordsToParse
  splitWords = newWordsToParse.split(" ")
}

function checkTheIndices() {
  checkIndex = prompt("give a number to check its index", "")
  num = parseInt(checkIndex)

  let textNode = document.createTextNode(splitWords[num - 1])
  let li = document.createElement('li')
  li.appendChild(textNode)
  document.getElementById("change").appendChild(li)
}


function disemvowel() {
  let wordsToDisemvowel = document.getElementById("words").value.toLowerCase()
  let newWords = wordsToDisemvowel.replace(/[0-9\W_]/g, "")
  let emptyArray = []

  for(let i = 0; i < newWords.length; i++) {
    if(newWords[i] !== "a" && newWords[i] !== "e" && newWords[i] !== "i" && newWords[i] !== "u" && newWords[i] !== "o") {
      emptyArray.push(newWords[i])
    }
  }

  let disemvowel = emptyArray.join("")
  return alert(disemvowel)
}


function fibonacciBases() {
  let fiboNum = []
  let fibToDecimal = document.getElementById("fibToDecimal").value
  let splitDecimal = fibToDecimal.split("")
  let reverseDecimal = splitDecimal.reverse()
  let newFibo = []

  for(let j = 0; j < reverseDecimal.length; j++) {
    if(fiboNum.length < 2) {
      fiboNum.push(1)
    } else {
      fiboNum.push(fiboNum[fiboNum.length -1] + fiboNum[fiboNum.length-2])
    }
  }

  for(let i = 0; i < reverseDecimal.length; i++) {
    if(reverseDecimal[i] === 1 || reverseDecimal[i] > 0) {
      newFibo.push(fiboNum[i])
    }
   }

  var sum = newFibo.reduce(function(a,b) {
    return a+ b;
  }, 0)

  return alert(sum)
}


function fibonacciSeq() {
  let decimalToFib = document.getElementById("convertToFibo").value

}


function scrabBag() {
  let scrabbleBag = {
    "A":9,
    "B":2,
    "C":2,
    "D":4,
    "E":12,
    "F":2,
    "G":3,
    "H":2,
    "I":9,
    "J":1,
    "K":1,
    "L":4,
    "M":2,
    "N":6,
    "O":8,
    "P":2,
    "Q":1,
    "R":6,
    "S":4,
    "T":6,
    "U":4,
    "V":2,
    "W":2,
    "X":1,
    "Y":2,
    "Z":1,
    "_": 2
  }

  let wordsEntered = document.getElementById("enterLetters").value.toUpperCase()
  let uniqueWords = [...new Set(wordsEntered)]
  let outputString = ""

  for(let i = 0; i < wordsEntered.length; i++) {
    scrabbleBag[wordsEntered[i]] = (scrabbleBag[wordsEntered[i]] - 1)
  }

  for(let j = 0; j < uniqueWords.length; j++) {
    outputString += (uniqueWords[j] + ":" + scrabbleBag[uniqueWords[j]] + "\n")
  }

  return alert(outputString)
}


function findSubString() {
  let string = document.getElementById("string").value
  let firstLetter = string.split("").shift()
  let string1 = ""
  let substring = ""

  for (var i = 0; i < string.length; ++i) {
    if(string[i] === firstLetter) {
      string1 += string[i]
    } else if(string[i] === string[i-1]) {
      substring += string[i]
    } else if(string[i] === string[i+1]) {
      substring += string[i]
    }
  }
  alert(substring)
}
