$('.js--scroll-home').click(function(){
  $('html, body').animate({scrollTop: $('.homeanchor').offset().top}, 1000, 'easeInOutQuart');
});

$('.js--scroll-about').click(function(){
  $('html, body').animate({scrollTop: $('.aboutanchor').offset().top}, 1000, 'easeInOutQuart');
});

$('.js--scroll-skills').click(function(){
  $('html, body').animate({scrollTop: $('.skillsanchor').offset().top}, 1000, 'easeInOutQuart');
});

$('.js--scroll-projects').click(function(){
  $('html, body').animate({scrollTop: $('.projectsanchor').offset().top}, 1000, 'easeInOutQuart');
});

$('.js--scroll-contact').click(function(){
  $('html, body').animate({scrollTop: $('.contactanchor').offset().top}, 1000, 'easeInOutQuart');
});
