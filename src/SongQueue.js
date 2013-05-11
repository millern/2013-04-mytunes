var SongQueue = Songs.extend({
  initialize: function(){
    this.on('add', function(song){
      if(this.models.length ===1){
        this.playFirst();
      }
    });
  },
  playFirst: function(){
    this.models[0].play();
  }

});

