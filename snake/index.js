//State

//make sure to establish default values within the sstate
const state = {
	score: 0,
	board: [],
	gameInterval: null,
	food: [5,5],
	snake: {
	 	nextDirection: [[1, 0]],
		body: [ [10,5], [10,6], [10,7], [10,8]],
	}
}

//Html Elements
const appElement = document.getElementById("app");
const boardElement = document.createElement("div");
const scoreElement = document.createElement("div")
const startButton = document.createElement("BUTTON")

//Other functions

//establisssh the state of my board
function buildBoard() {
	//building bare bone board
	for(let rowIndex = 0; rowIndex < 20; rowIndex++) {
		const row = []
		for(let colIndex = 0; colIndex < 20; colIndex++) {
			row.push("");
		}
		state.board.push(row);
	}

	//different for loop for food
	setFoodInBoard();
	//different for loop for snake
	setSnakeInBoard();
}


function setSnakeInBoard() {
	for(let i = 0; i < state.snake.body.length; i++) {
		const currentSnakeSegment = state.snake.body[i]; //[10, 5]
		console.log(currentSnakeSegment);
		const currentSegmentRowIndex = currentSnakeSegment[0];
		const currentSegmentColIndex = currentSnakeSegment[1];
		state.board[currentSegmentRowIndex][currentSegmentColIndex] = "snake";
	}
}

function setFoodInBoard() {
	const foodPosition = state.food
	state.board[foodPosition[0]/* food row index */][foodPosition[1]/*food col index*/] = "food";
}

function moveSnake() {
	const snakeHead = state.snake.body[0];
	console.log(snakeHead[0])
	const newSnakeHeadRowIdx = snakeHead[0] + state.snake.nextDirection[0] ;
	const newSnakeHeadColIdx = snakeHead[1] + state.snake.nextDirection[1] ;
	console.log(state.snake.nextDirection);
	console.log(newSnakeHeadColIdx);
	console.log(newSnakeHeadColIdx);
	console.log(snakeHead);
	state.snake.body.unshift([newSnakeHeadRowIdx, newSnakeHeadColIdx]);
	console.log(state.snake)
}


function bootstrap() {
	//setting text into elements before inserting them into the dom
	boardElement.classList.add("board")
	
	startButton.classList.add("start")
	startButton.innerText = "Yo start here";

	scoreElement.classList.add("score")
	scoreElement.innerText = "Yo score is here: 0";

	appElement.appendChild(scoreElement);
	appElement.appendChild(boardElement);
	appElement.appendChild(startButton);

	buildBoard();	
	renderBoard();
}

//Renders
function renderBoard() {

	//boardElement.innerHTML = "";
	for(let row = 0; row < state.board.length; row++) {
		//row element to append to the board
		for(let col = 0; col < state.board[row].length; col++) {
			const tile = document.createElement("div");
			if (state.board[row][col] === "snake") {
				tile.classList.add("snake");
			} else if (state.board[row][col] === "food") {
				tile.classList.add("food");
			}			
			tile.classList.add("tile")
			boardElement.appendChild(tile);
		}
	}
}

//Event Listeners
startButton.addEventListener("click", function() {

})

document.addEventListener("keydown", function(event) {
	if(!state.gameInterval) {
		state.gameInterval = setInterval(function () {
		}, 167);
	}
})

//Global Function call biznezz logic megalul
bootstrap();
moveSnake();