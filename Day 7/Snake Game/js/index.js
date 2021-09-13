// Game Constants & Variables
let inputDir = {x: 0, y: 0};
let speed = 5;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
];

food = {x: 6, y: 7};
document.getElementById('gameover').style.visibility="hidden";
document.getElementById('board-menu').style.visibility="hidden";
document.getElementById('main-menu').style.visibility="visible";
const startnew = document.getElementById('main-menu-start-game');
    startnew.addEventListener("click", function(){
        document.getElementById('main-menu').style.visibility="hidden";            
        main();
    });

// Game Functions
function main(current_time) {
    window.requestAnimationFrame(main);
    // console.log(current_time)
    if((current_time - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = current_time;
    gameEngine();
}

function isCollide(snake) {
    // If you bump into yourself 
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    // If you bump into the wall
    if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
        return true;
    }
        
    return false;
}

function gameEngine(){   
    // Part 1: Updating the snake array & Food
    if(isCollide(snakeArr)){
        inputDir =  {x: 0, y: 0};
        snakeArr = [{x: 13, y: 15}];
        score = 0;
          
        document.getElementById('gameover').innerHTML="Game Over";
        document.getElementById('gameover').style.visibility="visible";
        document.getElementById('board-menu').style.visibility="visible";
        document.getElementById('main-menu').style.visibility="hidden";

        const restart = document.getElementById('board-menu-restart');
        restart.addEventListener("click", function(){
            document.getElementById('gameover').style.visibility="hidden";
            document.getElementById('board-menu').style.visibility="hidden";
            main();
        });

        const quit = document.getElementById('board-menu-quit');
        quit.addEventListener("click", function(){
            document.getElementById('main-menu').style.visibility="visible";
            document.getElementById('gameover').style.visibility="hidden";
            document.getElementById('board-menu').style.visibility="hidden";
        });

        const startnew = document.getElementById('main-menu-start-game');
        startnew.addEventListener("click", function(){
            document.getElementById('main-menu').style.visibility="hidden";            
            main();
        });
    }

    // If you have eaten the food, increment the score and regenerate the food
    if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x){
        score += 1;
        scoreBox.innerHTML = "Score: " + score;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
    }

    // Moving the snake
    for (let i = snakeArr.length - 2; i>=0; i--) { 
        snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Part 2: Display the snake and Food
    // Display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if(index === 0){
            snakeElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    // Display the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);
}

// Main logic starts here

window.requestAnimationFrame(main);
window.addEventListener('keydown', e =>{
    inputDir = {x: 0, y: 1} // Start the game
    switch (e.key) {
        case "ArrowUp":
            // console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;

        case "ArrowDown":
            // console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;

        case "ArrowLeft":
            // console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;

        case "ArrowRight":
            // console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        default:
            break;
    }
});