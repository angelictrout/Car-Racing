var database;   

var gameState = 0;
var playerCount;
var allPlayers;
var car1, car2, car3, car4, cars;
var track, carImage1, carImage2, carImage3, carImage4;
var playerRank = 0;
var p;
var form, player, game;

function preload(){
    track = loadImage ("track.jpg");
    carImage1 = loadImage("car1.png");
    carImage2 = loadImage("car2.png");
    carImage3 = loadImage("car3.png");
    carImage4 = loadImage("car4.png");
}

function setup(){
    createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();

    
}

function draw(){
   // background("white");
    if(playerCount === 4){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }

    if(gameState === 2){
        game.end();
    }
}

