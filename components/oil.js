var Oil = BlazeComponent.extendComponent({
  template: function() {
    return 'Oil';
  },

  onCreated:function(){
    Session.set('oil_count',3)
  },

  oil_count: function() {
    var arr = []
    for (var i = 0; i < Session.get('oil_count'); i++) {
      arr[i] = i;
    }
    return arr
  },



  events: function() {
    return Oil.__super__.events.call(this).concat({
      'click a.tooltipped': this.explosion
    });
  }
}).register('Oil');
