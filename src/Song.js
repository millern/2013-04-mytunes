var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
    console.log("playing");
  },
  enqueue: function(){
    this.trigger('enqueue', this);
  },
  dequeue: function(){
    this.trigger('dequeue',this);
  }
  
});
