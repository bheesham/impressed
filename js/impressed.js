
/*
	
	A hopefully easy to use UI for Impress.js
	
	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud <http://bheesham.com/>.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>
*/


(function() {
  var bind_show_properties, controls, current_selected, delete_elm, delete_slide, insert_elm, insert_slide, show_menu, show_properties, slideshow;

  controls = document.getElementById("controls-container");

  slideshow = document.getElementById("impress");

  document.controls_visible = false;

  document.properties_visible = false;

  current_selected = void 0;

  show_menu = function() {
    if (document.controls_visible === false) {
      controls.style.display = "block";
      document.controls_visible = true;
    } else {
      controls.style.display = "none";
      document.controls_visible = false;
    }
  };

  show_properties = function() {};

  bind_show_properties = function() {};

  insert_slide = function() {};

  delete_slide = function() {};

  insert_elm = function() {};

  delete_elm = function() {};

  document.addEventListener("keyup", function(event) {
    switch (event.keyCode) {
      case 27:
        return show_menu();
    }
  });

  this.impress().init();

}).call(this);
