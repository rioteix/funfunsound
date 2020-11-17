// const backgroundColor = [36, 36, 36];
const myCanvas = { width: 750, height: 700};
const backgroundColor = [36, 36, 36];
const lineColor = [255, 165, 140];
const activeLineColor = [255, 204, 176];
const lineWidth = 10;
const activelineWidth = 9;
const sounds = Array.from({ length: 6 });

const ball1 = {//red
    x: 300,
    y: 100,
    size: 100,
    speed: 5,
    fillColor: [156, 0, 16],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 2000,
} 

const ball2 = {//magenta
    x: 300,
    y: 200,
    size: 100,
    speed: 5.1,
    fillColor: [181, 0, 84],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 1000,
} 

const ball3 = {//pink
    x: 300,
    y: 300,
    size: 100,
    speed: 5.2,
    fillColor: [181, 0, 154],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 0,
} 

const ball4 = {//purple
    x: 300,
    y: 400,
    size: 100,
    speed: 5.3,
    fillColor: [117, 35, 158],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 0,
} 

const ball5 = {//blue
    x: 300,
    y: 500,
    size: 100,
    speed: 5.4,
    fillColor: [51, 61, 176],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 0,
} 

const ball6 = {//light blue
    x: 300,
    y: 600,
    size: 100,
    speed: 5.5,
    fillColor: [2, 163, 232],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 0,
} 

const ball7 = {//pink
    x: 300,
    y: 100,
    size: 1,
    speed: 9,
    fillColor: [241, 215, 247],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 0,
} 

const ball8 = {//green
    x: 300,
    y: 500,
    size: 1,
    speed: 5,
    fillColor: [126, 230, 192],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 0,
} 

const ball9 = {//bluegreen
    x: 300,
    y: 600,
    size: 1,
    speed: 7,
    fillColor: [24, 197, 204],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 0,
} 

const ball10 = {//blue
    x: 300,
    y: 550,
    size: 1,
    speed: 4,
    fillColor: [126, 200, 252],
    strokeColor: [156, 202, 255],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 0,
} 

const leftEdge = {
    x1: 100,
    y1: 50,
    x2: 100,
    y2: 650,
    color: lineColor,
    width: lineWidth,

}

const bottomEdge = {
    x1: 100,
    y1: 50,
    x2: 650,
    y2: 50,
    color: lineColor,
    width: lineWidth,

}

const topEdge = {
    x1: 100,
    y1: 650,
    x2: 650,
    y2: 650,
    color: lineColor,
    width: lineWidth,

}

const rightEdge = {
    x1: 650,
    y1: 50,
    x2: 650,
    y2: 650,
    color: lineColor,
    width: lineWidth,
}




const balls = [ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10];



function preload(){

    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.mp3`)
    })

    console.log(sounds);

    ball1.rightSound = sounds[0];
    ball1.leftSound = sounds[1];

    ball2.rightSound = sounds[0];
    ball2.leftSound = sounds[1];

    ball3.rightSound = sounds[0];
    ball3.leftSound = sounds[1];

    ball4.rightSound = sounds[0];
    ball4.leftSound = sounds[1];

    ball5.rightSound = sounds[0];
    ball5.leftSound = sounds[1];

   ball6.rightSound = sounds[0];
    ball6.leftSound = sounds[1];

   ball7.rightSound = sounds[0];
    ball7.leftSound = sounds[1];

  ball8.rightSound = sounds[0];
   ball8.leftSound = sounds[1];

    ball9.rightSound = sounds[0];
    ball9.leftSound = sounds[1];

  ball10.rightSound = sounds[0];
    ball10.leftSound = sounds[1];

    // for(let i = 0; i < sounds.length; i++){
    //     sounds[i] = loadSound(`sounds/${i}.mp3`)
    // }
}

function setup(){
    createCanvas(myCanvas.width, myCanvas.height);
    background(backgroundColor);
}



function draw(){
    
    background(backgroundColor);

    balls.forEach((ball) => {
        updateBall(ball);
        displayBall(ball);
    })
    drawLine(leftEdge);
    drawLine(rightEdge);

    drawLine(topEdge);
    drawLine(bottomEdge);
}


function updateBall(ball){
    console.log(ball.x);
    if(ball.x + ball.size/2 > rightEdge.x1 ){
        ball.speed *= -1;
        ball.rightSound.play();
        activateLine(rightEdge);
    } else if(ball.x - ball.size/2 < leftEdge.x1 ){
        ball.speed *= -1;
        ball.leftSound.play();
        activateLine(leftEdge);
    }
    ball.x+= ball.speed;
}


const displayBall = ({x, y, size, strokeColor, fillColor, ballStrokeWeight}) => {
        stroke(strokeColor);
        fill(fillColor);
        strokeWeight(ballStrokeWeight);
        ellipse(x, y, size);
}

function drawLine({x1, y1, x2, y2, color, width}){
    stroke(color);
    strokeWeight(width);
    line(x1, y1, x2, y2);
}



function activateLine(line){

    line.color = activeLineColor;
    line.width = activelineWidth;

    setTimeout(() => resetLines(line), 500);
}


function resetLines(line){
    line.color = lineColor;
    line.width = lineWidth;
}