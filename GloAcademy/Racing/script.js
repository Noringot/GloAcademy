const score = document.querySelector('.score');
const start = document.querySelector('.start');
const game__area = document.querySelector('.game__area');
const car = document.createElement('div');

car.classList.add('car');

start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

const keys = {
	ArrowUp: false,
	ArrowDown: false,
	ArrowRight: false,
	ArrowLeft: false
};

const option = {
	start: false,
	score: 0,
	speed: 3
};

function startGame() {
	start.classList.add('hide');
	option.start = true;
	game__area.append(car);
	requestAnimationFrame(palyGame);
}

function palyGame() {
	console.log('Play in game/');
	if (option.start){
		requestAnimationFrame(palyGame);
	}
}

function startRun(e) {
	e.preventDefault();
	keys[e.key] = true;
}
function stopRun(e) {
	e.preventDefault();
	keys[e.key] = false;
}