
/*
	
	A hopefully easy to use UI for Impress.js
	
	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud <http://bheesham.com/>.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>
*/


(function() {
  var controls, controls_visible, current_selected, properties_visible, show_menu, slideshow;

  controls = document.getElementById("controls-container");

  slideshow = document.getElementById("impress");

  controls_visible = false;

  properties_visible = false;

  current_selected = void 0;

  show_menu = function() {
    if (controls_visible === false) {
      controls.style.display = "block";
      controls_visible = true;
    } else {
      controls.style.display = "none";
      controls_visible = false;
    }
  };

  document.addEventListener("keyup", function(event) {
    switch (event.keyCode) {
      case 27:
        return show_menu();
    }
  });

  this.impress().init();

}).call(this);
