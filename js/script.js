$(document).ready(function(){
   $('.about-me-link').click(function() {
      $('.close').toggleClass('active');
      $('.about-wrap-block').toggleClass('active-wrap');
      $('.cop').toggleClass('color-cop');
      $('.about-me-info-block').toggleClass('margin-right');
      $('.cop-rect, .offer-block, .portfolio-block, .social-block').toggleClass('z-index');
      $('.about-me-link').toggleClass('border-r');

   });
   $('.resume-link').click(function() {
      $('.close').toggleClass('active');
      $('.about-wrap-block').toggleClass('active-wrap');
      $('.cop').toggleClass('color-cop');
      $('.about-me-info-block').toggleClass('margin-right');
      $('.cop-rect, .offer-block, .portfolio-block, .social-block').toggleClass('z-index');
      $('.about-me-link').toggleClass('border-r');
   });

   $('.instagram, .vk').click(function() {
      $('.social-alarm').addClass('visible');
         setTimeout(function(){
            $('.social-alarm').removeClass('visible');
         }, 1500);
     });
});