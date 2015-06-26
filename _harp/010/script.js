$(window).scroll(function(){
  if ( $(this).scrollTop() > 1000) {
    $('body').addClass('blue');
  }
  else {
   $('body').removeClass('blue');
  }
});

