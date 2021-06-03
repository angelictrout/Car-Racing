class Game{
    constructor(){
    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", (data)=>{
            gameState = data.val(); 
        });
    }

    update(state){
        database.ref('/').update({
            gameState:state
        });
    }


    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            //console.log(allPlayers);
            form = new Form();
            form.display();
        }

        car1 = createSprite(100,200);
        car1.addImage("car1", carImage1);
        car2 = createSprite(300,200);
        car2.addImage("car2", carImage2);
        car3 = createSprite(500,200);
        car3.addImage("car3", carImage3);
        car4 = createSprite(700,200);
        car4.addImage("car4", carImage4);
        cars = [car1, car2, car3, car4];
    }

    play(){
        form.hide_details();
        
        Player.getPlayerInfo();
        player.getCarsAtEnd();
        
        if(allPlayers !== undefined){
            background(rgb(198, 135, 103));
            image(track,0, -displayHeight*4, displayWidth, displayHeight*5);
            //index of the array
            var index = 0;
        
            //x and y position of the cars
            var x = 275 ;
            var y;
        
            for(var plr in allPlayers){
                //add 1 to the index for every loop
                index = index + 1 ;
        
                //position the cars a little away from each other in x direction
                x = x + 275;
                //use data form the database to display the cars in y direction
                y = displayHeight - allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
        
                if (index === player.index){
                    //cars[index - 1].shapeColor = "red";
                    strokeWeight(10);
                    stroke("red");
                    fill("red");
                    circle(x, y, 60);
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
            
                //textSize(15);
                //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
            }
    
        }
    
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=10
            player.update();
        }
    
        if(player.distance > 5400){
            gameState = 2;
            playerRank++;
            Player.updateCarsAtEnd(playerRank);
            player.rank = playerRank;
            player.update();
        }
        drawSprites();
      }
    
      end(){
        console.log("Game Ended");
        p = createElement("h1", player.rank);
        p.position(displayWidth/2, 200);
      }
    }