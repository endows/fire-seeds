var Seed = BlazeComponent.extendComponent({
  template: function() {
    return 'Seed';
  },

  fires: new ReactiveArray([1, 2, 3]),

  explosion: function(e) {
    if(Session.get('oil_count') == 0){
      return false
    }
    this.fires.unshift('0')
    $('.burn').last().velocity({
      "color": "#FE642E"
    }).velocity("reverse", {
      "delay": 500
    });
    Session.set('oil_count',Session.get('oil_count') - 1)
  },

  fire_count: function() {
    return this.fires.list()
  },

   checkHasNotOil:function(){
    if(Session.get('oil_count') == 0){
      return true
    }else{
      return false
    }
  },

  events: function() {
    return Seed.__super__.events.call(this).concat({
      'click a.tooltipped': this.explosion
    });
  }
}).register('Seed');
