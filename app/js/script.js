const tileDisplay = document.querySelector(".tile-container")
const keyboard = document.querySelector(".key-container")


let currentRow = 0
let currentTile = 0
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
