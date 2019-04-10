
var projects = [];

function start(){
  initSkills();
  initProjects();
  renderProjects();
  initScrolls();
  initializeWayPoints();
}

function initSkills(){
  var skillsArr = [];

  skillsArr.push("Javascript");
  skillsArr.push("ReactJS");
  skillsArr.push("ES6");
  skillsArr.push("C++");
  skillsArr.push("C");
  skillsArr.push("Python");
  skillsArr.push("Unity");
  skillsArr.push("C#");
  skillsArr.push("HTML");
  skillsArr.push("CSS");
  skillsArr.push("JQuery");
  skillsArr.push("Java");
  skillsArr.push("Bash");
  skillsArr.push("OCaml");
  skillsArr.push("Prolog");
  skillsArr.push("Arduino");
  skillsArr.push("Android");
  skillsArr.push("Firebase");
  skillsArr.push("NodeJS");
  var str = "";
  for(var i = 0; i < 3; i++){
    str += "<h1>&nbsp</h1>";
  }
  for(var i = 0; i < skillsArr.length; i++){
    str += "<h1>";
    str += skillsArr[i];
    str += "</h1>";
  }
  for(var i = 0; i < 3; i++){
    str += "<h1>&nbsp</h1>";
  }

  $('#skills-grid-2').html(str);

  var skillsArr = [];

  skillsArr.push("Graphic Design");
  skillsArr.push("Logo Design");
  skillsArr.push("Branding");
  skillsArr.push("UI Design");
  skillsArr.push("UX");
  skillsArr.push("Photography");
  skillsArr.push("Guitar Covers");
  skillsArr.push("Poster Design");
  skillsArr.push("Social Media");
  skillsArr.push("Creative Concepting");
  skillsArr.push("Videography");
  skillsArr.push("Prototyping");
  skillsArr.push("Lettering");
  skillsArr.push("Photo Grading");
  skillsArr.push("Doodling");
  var str = "";
  for(var i = 0; i < 3; i++){
    str += "<h1>&nbsp</h1>";
  }
  for(var i = 0; i < skillsArr.length; i++){
    str += "<h1>";
    str += skillsArr[i];
    str += "</h1>";
  }
  for(var i = 0; i < 3; i++){
    str += "<h1>&nbsp</h1>";
  }

  $('#skills-grid-4').html(str);
}

function initProjects(){
  projects.push(new project("Ninja Snake", "a lightweight revamped classic snake game", "ninja", "#ac283f", "ninja.kgoenadibrata.com"));
  projects.push(new project("EmailFix", "bulk email fixer", "email", "#3866d6", "emailfix.kgoenadibrata.com"));
  projects.push(new project("Jump!", "finger curler game that pumps your adrenaline", "jump", "#fd9c41", "jump.kgoenadibrata.com"));
  projects.push(new project("A* Pathfinder", "visualization of A* pathfinding algorithm", "astar", "#1a9955", "astar.kgoenadibrata.com"));
  projects.push(new project("MakanYok", "food recommendation from my personal curated friends", "makanyok", "#ca6018", "makanyok.kgoenadibrata.com"));
  projects.push(new project("Spctrm", "color picker Google Chrome extension", "spctrm", "#542994", "bit.ly/spctrmChrome"));
  // projects.push(new project("Menos Website", "redesigned a mentor pairing startup", "menos", "#237b91", ""));
  projects.push(new project("isPrime.io", "simple prime number checker", "isprime", "#536d8c", "isprime.io"));
}

function project(name, desc, img, color, link){
  this.name = name;
  this.desc = desc;
  this.img = "img/" + img + "-icon.png";
  this.color = color;
  this.link = link;
}

function initScrolls(){
  $("#logo").click(function (){ $('html, body').animate({scrollTop: $("#home-container").offset().top}, 700, 'easeInOutQuart');});
  $("#about-nav").click(function (){ $('html, body').animate({scrollTop: $("#about-container").offset().top}, 700, 'easeInOutQuart');});
  $("#projects-nav").click(function (){ $('html, body').animate({scrollTop: $("#projects-container").offset().top}, 700, 'easeInOutQuart');});
  $("#skills-nav").click(function (){ $('html, body').animate({scrollTop: $("#skills-container").offset().top}, 700, 'easeInOutQuart');});
  $("#contact-nav").click(function (){ $('html, body').animate({scrollTop: $("#contact-container").offset().top}, 700, 'easeInOutQuart');});
}


function renderProjects(){
  var containerElement = $('#project-entries');

  var str = "";
  for(var i = 0; i < projects.length; i++){
    var p = projects[i];
    str += `<div class="project-entry">
            <div class="icon-container" style="background: linear-gradient(to right, ${p.color},${p.color} 50%,#ffffff 50%,#ffffff)"><div class="project-icon icon" style="background-image: url('${p.img}')"></div></div>
            <div class="project-center"><h1 class="medium-text">${p.name}</h1></div>
            <div class="project-center"><h1 class="small-text project-desc">${p.desc}</h1></div>
            <a class="open-icon icon" href="http://${p.link}" target="_blank"></a>
            <div class="github-icon icon"></div>
            </div> `;
  }

  containerElement.html(str);
}

function initializeWayPoints(){
  new Waypoint({
    element: document.getElementById('contact-container'),
    handler: function(direction) {
      for(let i = 1; i <= 6; i++){
        var str = '#anim-slide-' + i + " h1";
        console.log(str);
        $(str).delay(100*i - 100);
        $(str).slideDown(1500, 'easeOutElastic');
      }
      this.destroy();
    },
    offset: '100px',
  });

  new Waypoint({
    element: document.getElementById('about-container'),
    handler: function(direction) {
      var str = "#container-anim-about h1";
      console.log(str);
      $(str).slideDown(2000, 'easeOutElastic');
      this.destroy();
    },
    offset: '100px',
  });

  new Waypoint({
    element: document.getElementById('home-container'),
    handler: function(direction) {
      var str = "#container-anim-home-2 h1";
      console.log(str);
      $(str).delay(100);
      $(str).slideDown(2000, 'easeOutElastic');

      this.destroy();
      var str = "#container-anim-home-1 h1";
      console.log(str);

      $(str).slideDown(2000, 'easeOutElastic');

    },
    offset: '100px',
  });
}
