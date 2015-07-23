if(Meteor.isClient){
  Router.map( function () {
    this.route('start',{
      path:'/'
    });
    this.route('growFire',{
      path:'/growFire'
    });
  });
}
