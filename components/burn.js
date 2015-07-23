var Burn = BlazeComponent.extendComponent({
  template: function () {
    return 'Burn';
  },

  explosion:function(e){
    $("span").velocity({
      "font-size": "+=200px",
      "color": "#FE642E"
    }).velocity("reverse", {
      "delay": 500
    });
  },

  events: function () {
    return Burn.__super__.events.call(this).concat({
      'click span': this.explosion
    });
  }
}).register('Burn');
