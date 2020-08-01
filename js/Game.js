class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hidenfunction();
    textSize(30);
    fill(10,10,10);
    text("GameStart", 120,100);
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      var display = 130;
      for(var plr in allPlayers){
        if(plr === "player" + player.index){
          fill(255,0,0);
        }
        else{
          fill(0,0,0);
        }
        display += 20;
        textSize(15);
        text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,display);
      }
    }
    if(keyDown(UP_ARROW)&& player.index !== null){
      player.distance += 20;
      player.update();
    }
  }
}
