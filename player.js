class Player{
    constructor(){
        this.index = null;
        this.name  = null;
        this.distance = 0;
        this.rank = null;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data)=>{
            playerCount = data.val();
        });
    }

    updateCount(count){
        /*var playerCountRef = database.ref('/');
        playerCountRef.update({
            playerCount: count
        });*/

        database.ref('/').update({
            playerCount:count
        });
    }
    

    update(){
        var playerIndex = "players/player" + this.index;  //'players/player1'
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            rank:this.rank
        });
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        });

    }

    getCarsAtEnd(){
        var carInfo = database.ref('carsAtEnd');
        carInfo.on("value", (data)=>{
            playerRank = data.val();
        });
    }

    static updateCarsAtEnd(rank){
        database.ref('/').update({
            carsAtEnd:rank
        });   
    }

}