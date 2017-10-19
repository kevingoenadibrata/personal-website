var $body1 = $('.body1');
var $body2 = $('.body2');
var $body3 = $('.body3');
var $anim = $('.anim li');
var $home = $('.home');
var $about = $('.about');
var $skills = $('.skills');
var $contact = $('.contact');
var speed=33;
var delay=1000;
var xElement=0;

$('.aboutanchor').waypoint(function() {
})

$body1.waypoint(function() {
  $body1.addClass('body1-appear');
}, {offset: '70%'})

$body2.waypoint(function() {
  $body2.addClass('body2-appear')
}, {offset: '70%'})

$body3.waypoint(function() {
  $body3.addClass('body3-appear');
}, {offset: '70%'})

$anim.waypoint(function(){
  $anim.each(function(i){
      var t = $(this);
      setTimeout(function(){ t.addClass('slidein'); t.css("visibility", "visible");}, (i+1) * 150);
    });
}, {offset: '70%'})
