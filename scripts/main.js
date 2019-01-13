$(document).ready(function() {
  $(function(){
    $('nav').data('size','big');
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 50)
  {
      if($('nav').data('size') == 'big')
      {
          $('nav').data('size','small');
          $('nav').stop().animate({
              height:'40px'
          },900);
      }
  }
  else
    {
      if($('nav').data('size') == 'small')
        {
          $('nav').data('size','big');
          $('nav').stop().animate({
              height:'90px'
          },900);
        }
    }
  });

  console.log('If you\'re seeing this, say hi! https://github.com/christinahouck');
});
