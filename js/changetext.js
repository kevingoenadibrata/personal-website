var textArray = ["front-end developer","graphic designer","photo magician", "music lover","dreamer"];
var index = 0;
setInterval(function(){
  $("#changeText").animate({opacity:0},function()
  {
     if(textArray.length <= index) {
        index = 0;
     }
     
     $(this).text(textArray[index]).animate({opacity:1})
     index++;
  });
},2000);
