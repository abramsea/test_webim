$(window).scroll(function() {
    $('.animated').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+470) {
        $(this).addClass('visible');
      }
    });
  });