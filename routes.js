if(Meteor.isClient){
  Router.map( function () {
    this.route('start',{
      path:'/'
    });
    this.route('GrowFire',{
      path:'/growFire'
    });
    this.route('goOut',{
      path:'/goOut'
    });
  });
}
