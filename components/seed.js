var Seed = BlazeComponent.extendComponent({
  template: function() {
    return 'Seed';
  },

  onRendered: function() {
    Session.set('fire_count',1)
    if (this._componentInternals.templateInstance.data.mode == 'goout') {
      this.go_out()
    }
  },

  explosion: function(e) {
    if (Session.get('oil_count') == 0) {
      return false
    }
    Session.set('oil_count', Session.get('oil_count') - 1)
    Session.set('fire_count', Session.get('fire_count') + 1 )
    setTimeout(function(){
      $('.burn').last().velocity({
        "color": "#FE642E"
      }).velocity("reverse", {
        "delay": 500
      });
    },100)



  },

  fire_count: function() {
    var arr = []
    for (var i = 0; i < Session.get('fire_count'); i++) {
      arr[i] = i;
    }
    return arr
  },

  go_out: function() {
    Session.set('oil_count',0)
    Session.set('fire_count',4)
    var time = 600
    setInterval(function() {
      $('.burn').last().fadeOut(time, function() {
        $(this).remove()
      })
      if (!$('.burn').length) {
        $('#seed').fadeOut(100,function(){
          $('#hided_text').fadeIn()
        })
      }
    }, time)

  },

  checkHasNotOil: function() {
    if (Session.get('oil_count') == 0) {
      return true
    } else {
      return false
    }
  },

  events: function() {
    return Seed.__super__.events.call(this).concat({
      'click a.tooltipped': this.explosion,
      'click a.go_out': this.go_out,
    });
  }
}).register('Seed');
