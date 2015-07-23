window.onload = function(){


  initToolTip = function(){
    $('.tooltipped').tooltip({
      delay: 50
    });
  }

  var se = setInterval(function(){
    if( $('.tooltipped') ){
      initToolTip()
      clearInterval(se)
    }
  },100)
}
