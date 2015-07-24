if(Meteor.isClient){
  Session.setDefault('oil_count',3)
  Template.growFire.helpers({
    hasOil:function(){
      if(Session.get('oil_count')){
        return true
      }else{
        return false
      }
    }
  })
}
