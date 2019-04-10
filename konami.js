// a key map of allowed keys
var allowedKeys = {
  66: 'b',
  76: 'l',
  65: 'a',
  83: 's',
  84: 't',
  79: 'o',
  70: 'f',
};

var activated = false;

// the 'official' Konami Code sequence
var konamiCode = ['b', 'l', 'a', 's', 't', 'o', 'f', 'f'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      if(!activated) startShip();
      activated = true;
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});
