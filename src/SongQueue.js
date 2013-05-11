var SongQueue = Songs.extend({
  initialize: function(){
    this.on('add', function(song){
      console.log("shnur");
      song.play();
    });
  }

});

