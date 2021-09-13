const dino = document.querySelector('.dino');
const game = document.querySelector('.game');
const jumpdino = document.querySelector('.jump');
// const bird = document.querySelector('.bird');
const cactus = document.querySelector('.cactus');
const scoreBoard = document.querySelector('.score span');
const highscoreBoard = document.querySelector('.highscore span');
const restartBtn = document.querySelector('.restart-btn');

let animationframe;
let jumped = false;
let score = 0;
let highscore = 0;
let dinoHeight = 75, dinoWidth = 70;
let cactusOffsetTop = cactus.offsetTop;
console.log(cactusOffsetTop);

// let birdOffsetTop = bird.offsetTop;

function jump(){
	if(jumped) return;
	dino.classList.add('jump');
	jumped = true;
	setTimeout(function(){
		dino.classList.remove('jump');
		jumped = false;
	}, 800);
	console.log("visit jump");
}

window.addEventListener('click', function(){
	jump();
});

window.addEventListener('keydown', function(e){
	if(e.key === " "){
		jump();
	}
});

window.addEventListener('keyup', function(e){
	if(e.key == "p"){
		console.log("key pressed p");
		cancelAnimationFrame(animationframe);
		game.style.animation='none';
		dino.style.animation='none';
		cactus.style.animation='none';
		// jumpdino.style.animation='none';
	}
});

window.addEventListener('keyup', function(e){
	if(e.key == "r"){
		console.log("key pressed r");
		requestAnimationFrame(check);
		game.style.animation='land 3s linear infinite';
		dino.style.animation='dino 0.2s linear infinite';
		cactus.style.animation='cactus 1.5s linear infinite';
		// jumpdino.style.animation='jump 0.8s linear';
		// dino.classList.add('jump');
		jumped=false;		
	}
});

function check(){
	if(cactus.offsetLeft <= 10 + dinoWidth && cactus.offsetLeft > 10){
		if(dinoHeight + dino.offsetTop > cactus.offsetTop){
			document.querySelector('.game').classList.add('lost');
			restartBtn.style.display = "block";
			return;
		}
	}

	score++;
	if(highscore<score){
		highscore=score;
		if(score>=1000 && score<=1500){
			document.body.style.backgroundColor = "black";
		}else{
			document.body.style.backgroundColor = "white";
		}
	}
	highscoreBoard.innerText = highscore;
	scoreBoard.innerText = score;
	animationframe = requestAnimationFrame(check);
	// requestAnimationFrame(check);
}

check();

restartBtn.addEventListener('click', function(){
	document.querySelector('.game').classList.remove('lost');
	restartBtn.style.display = 'none';
	score = 0;
	scoreBoard.innerText = score;
	check();
});