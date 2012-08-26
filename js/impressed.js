
/*
	
	A hopefully easy to use UI for Impress.js
	
	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud <http://bheesham.com/>.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>
*/


(function() {
  var bind_show_properties, controls, current_selected, delete_elm, delete_slide, get_properties, hide_controls, hide_hotkeys, hide_properties, hotkeys, insert_elm, insert_slide, properties, show_controls, show_hotkeys, show_properties, slideshow, toggle_displays;

  controls = document.getElementById("controls-container");

  properties = document.getElementById("properties-container");

  hotkeys = document.getElementById("hotkeys-container");

  slideshow = document.getElementById("impress");

  document.controls_visible = false;

  document.properties_visible = false;

  document.hotkeys = false;

  current_selected = void 0;

  toggle_displays = function() {
    if (document.controls_visible === true) {
      hide_controls();
    } else {
      show_controls();
    }
    if (document.properties_visible === true) {
      hide_properties();
    }
    if (document.hotkeys_visible === true) {
      return hide_hotkeys();
    }
  };

  show_properties = function() {
    hide_controls();
    hide_hotkeys();
    document.properties_visible = true;
    return properties.style.display = "block";
  };

  show_controls = function() {
    hide_properties();
    hide_hotkeys();
    document.controls_visible = true;
    return controls.style.display = "block";
  };

  show_hotkeys = function() {
    hide_properties();
    hide_controls();
    document.hotkeys_visible = true;
    return hotkeys.style.display = "block";
  };

  hide_properties = function() {
    document.properties_visible = false;
    return properties.style.display = "none";
  };

  hide_controls = function() {
    document.controls_visible = false;
    return controls.style.display = "none";
  };

  hide_hotkeys = function() {
    document.hotkeys_visible = false;
    return hotkeys.style.display = "none";
  };

  get_properties = function(elm) {};

  bind_show_properties = function() {};

  insert_slide = function() {};

  delete_slide = function() {};

  insert_elm = function() {};

  delete_elm = function() {};

  document.addEventListener("keyup", function(event) {
    switch (event.keyCode) {
      case 27:
        return toggle_displays();
    }
  });

  document.getElementById("show-hotkeys").onclick = function() {
    return show_hotkeys();
  };

  this.impress().init();

}).call(this);
