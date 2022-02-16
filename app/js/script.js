const tileDisplay = document.querySelector(".tile-container")
const keyboard = document.querySelector(".key-container")
const messageDisplay = document.querySelector('.message-container')

let currentRow = 0
let currentTile = 0
let isGameOver = false
const wordle = "SUPER"
const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',
]

const guessRows = [
	['', '', '', '', '',],
	['', '', '', '', '',],
	['', '', '', '', '',],
	['', '', '', '', '',],
	['', '', '', '', '',],
	['', '', '', '', '',]
]

guessRows.forEach((guessRow,guessRowIndex) => {
	const rowElement = document.createElement("div")
	rowElement.setAttribute("id", "guessRow-" + guessRowIndex)

guessRow.forEach((_guess, guessIndex) => {
	const tileElement = document.createElement("div")
    tileElement.setAttribute("id", "guessRow-" + guessRowIndex + "-tile-" + guessIndex ) 
    rowElement.append(tileElement)
	tileElement.classList.add("tile")
})
	tileDisplay.append(rowElement)
})


const handleClick = (letter) =>{
	console.log ("logged", letter)
	if(letter === "«"){
		console.log("letter deleted")
		deleteLetter()
		return
	}
	if(letter === "ENTER"){
		checkRow()
		
		return
	}
	addLetter(letter)
}

keys.forEach(key => {
const buttonEl = document.createElement("button")
buttonEl.textContent = key
buttonEl.setAttribute("id", key)
buttonEl.addEventListener("click", () => handleClick(key))
keyboard.append(buttonEl)
})

const addLetter = (letter)=>{
	if(currentTile < 5 && currentRow < 6){
		const tile = document.getElementById("guessRow-" + currentRow + "-tile-" + currentTile)
		tile.textContent = letter
		guessRows[currentRow][currentTile] = letter
		tile.setAttribute("data", letter)
		currentTile++
		console.log('guessRows', guessRows)
	}

}

const deleteLetter = () => {
	if (currentTile > 0){
	currentTile--
	const tile = document.getElementById("guessRow-" + currentRow + "-tile-" + currentTile)
	tile.textContent = ""
	guessRows[currentRow][currentTile] = ""
	tile.setAttribute("data", "")
	}
}

const checkRow = () => {
	const guess =	guessRows[currentRow].join('')
if (currentTile > 4){
	flipTile()
if(wordle == guess){
	showMessage("magnificent")
	isGameOver = true
	return
} else {
	if (currentRow >= 5){
		isGameOver = true
		showMessage('Game Over')
		return
	}
if (currentRow < 5){
	currentRow++
	currentTile = 0
   }
  }
 }
}

const showMessage = (message) => {
	const messageEl = document.createElement("p")
	messageEl.textContent = message
	messageDisplay.append(messageEl)
	setTimeout(()=> messageDisplay.removeChild(messageEl), 2000)
}

const flipTile = ()=> {
	const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes
	rowTiles.forEach((tile, index) => {
	const dataLetter = tile.getAttribute('data')
 
	setTimeout(()=>{
		tile.classList.add("flip")
		if(dataLetter == wordle[index]){
			tile.classList.add("green-overlay")
		} else if (wordle.includes("dataLetter")) {
	   tile.classList.add("yellow-overlay")
		} else {
			tile.classList.add("grey-overlay")
		}
	}, 500 * index)
	
	
})
}

