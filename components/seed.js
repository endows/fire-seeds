var Seed = BlazeComponent.extendComponent({
  template: function () {
    return 'Seed';
  },

  fires:new ReactiveArray([1,2,3]),

  explosion:function(e){
    this.fires.unshift('0')
    $('.burn').last().velocity({
      "color": "#FE642E"
    }).velocity("reverse", {
      "delay": 500
    });
  },

  fire_count:function(){
    return this.fires.list()
  },

  events: function () {
    return Seed.__super__.events.call(this).concat({
      'click a.tooltipped': this.explosion
    });
  }
}).register('Seed');
