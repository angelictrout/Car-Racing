class Form{
    constructor(){
        this.title = createElement("h2");
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h2");
        this.reset = createButton("Reset");
    }

    hide_details(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2-50,0);

        this.input.position(displayWidth/2-40,displayHeight/2-80);
        this.button.position(displayWidth/2+30,displayHeight/2);
        this.reset.position(displayWidth-300,20);

        this.button.mousePressed(()=>{
            this.button.hide();
            this.input.hide();
            
            playerCount+=1;
            console.log(playerCount);
            player.name=this.input.value();
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello"+ player.name);
            this.greeting.position(displayWidth/2-70,displayWidth/4);
        });

        this.reset.mousePressed(()=>{
             player.updateCount(0);
             game.update(0);
             Player.updateCarsAtEnd(0);
             var playerInfo = database.ref('players');
             playerInfo.remove();
        });

        
    }
}