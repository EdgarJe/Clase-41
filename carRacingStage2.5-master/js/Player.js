class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('PlayerCount');
    playerCountRef.on("value",(data)=>{
      PlayerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      PlayerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getFinished(){
    database.ref
    ('Finished').on("value",(data)=>{
      this.rank = data.val();
    })
  }

  static updateFinished(rank){
    database.ref('/').update({
      Finished:rank
    })
  }

}
