
var x = 100;
var y = 100;

var vel = 0;
var vX = 0;
var vY = 0;

var angle = 0;
var DELTA_THETA = 5;
var BOUNCE_FACTOR = 0.6;

var GRAVITY_FORCE = 0.5;
var MAX_SPEED = 25;
var BOUNCE_SPEED_REQ = 5;
var ACCELERATION = 0.8;
var FRAME_RATE = 30;
var SHIP_SIZE = 50

var keyIsDown = [false, false, false, false];

var ship = $('#spaceship');

function startShip(){
   alert('WASD to control Spaceship');
   $('html, body').animate({scrollTop: $("#home-container").offset().top}, 700, 'easeInOutQuart');
   ship.animate({top: '100px', opacity: '1'}, 2000, function() { });
   setInterval(update, FRAME_RATE);
}

function update(){

   angle = angle % 360;
   if(angle < 0) angle + 360;
   //speed up
   if (keyIsDown[0] && vel > -MAX_SPEED) vel -= ACCELERATION;
   if (keyIsDown[2] && vel < MAX_SPEED) vel += ACCELERATION;
   if (keyIsDown[3]) angle -= DELTA_THETA;
   if (keyIsDown[1]) angle += DELTA_THETA;

   vX = -Math.sin(angle * (Math.PI / 180)) * vel;
   vY = Math.cos(angle * (Math.PI / 180)) * vel;


   //move
   x += vX;
   y += vY;


   if(x < 0){
      vel = -vel*BOUNCE_FACTOR;
      x = 0;
      if(Math.abs(vel) > BOUNCE_SPEED_REQ){
         if(quad(angle) == 3){
            angle -= 2*angle + 180;
         }
         else if(quad(angle) == 2){
            angle -= 2* angle + 180;
         }
      }
   }
   if(x > window.innerWidth-SHIP_SIZE){
      vel = -vel*BOUNCE_FACTOR;
      x = window.innerWidth-SHIP_SIZE;
      if(Math.abs(vel) > BOUNCE_SPEED_REQ){
         if(quad(angle) == 4){
            angle -= 2*angle + 180;
         }
         else if(quad(angle) == 1){
            angle -= 2* angle + 180;
         }
      }
   }

   if(y < 0){
      vel = -vel*BOUNCE_FACTOR;
      y = 0;
      if(Math.abs(vel) > BOUNCE_SPEED_REQ){
         if(quad(angle) == 2){
            angle += 2*(90-angle) + 180;
         }
         else if(quad(angle) == 1){
            angle += 2*(90-angle) + 180;
         }
      }
   }

   if(y > (window.innerHeight*5)-SHIP_SIZE){
      vel = -vel*BOUNCE_FACTOR;
      y = (window.innerHeight*5)-SHIP_SIZE;
   }

   //slow down
   if(vel > 0.5) vel -= GRAVITY_FORCE;
   else if(vel < -0.5) vel += GRAVITY_FORCE;
   else vel = 0;

   //change UI
   ship.css('left', x);
   ship.css('top', y);
   ship.css('transform', 'rotate(' + angle + 'deg)');
}

window.onkeydown = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 87) keyIsDown[0] = true;
   if (key == 83) keyIsDown[2] = true;
   if (key == 65) keyIsDown[3] = true;
   if (key == 68) keyIsDown[1] = true;
}

window.onkeyup = function(e) {
   var key = e.keyCode ? e.keyCode : e.which;

   if (key == 87) keyIsDown[0] = false;
   if (key == 83) keyIsDown[2] = false;
   if (key == 65) keyIsDown[3] = false;
   if (key == 68) keyIsDown[1] = false;
}


window.onresize = function(e) {

}

function quad(angle){
   if(angle < 0) angle += 360;

   if(angle >= 0 && angle < 90){
      return 1;
   }
   else if(angle >= 90 && angle < 180){
      return 4;
   }
   else if(angle >= 180 && angle < 270){
      return 3;
   }
   else if(angle >= 270 && angle < 360){
      return 2;
   }
   return 0;
}
