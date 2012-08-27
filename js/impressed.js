
/*
	
	A hopefully easy to use UI for Impress.js
	
	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud <http://bheesham.com/>.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>
*/


(function() {
  var bind_draggable, bind_show_properties, controls, current_selected, delete_elm, delete_slide, elm, get_properties, hide_controls, hide_hotkeys, hide_properties, hotkeys, insert_elm, insert_slide, properties, set_position, show_controls, show_hotkeys, show_properties, slideshow, toggle_displays, _i, _len, _ref;

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

  get_properties = function(elm) {
    var position;
    position = elm.getBoundingClientRect();
    return {
      tagname: elm.tagName,
      "class": elm.className,
      x: position.left,
      y: position.top,
      value: elm.innerText
    };
  };

  bind_show_properties = function(elm) {
    properties = get_properties(elm);
    console.dir(properties);
  };

  insert_slide = function(prev_slide) {};

  delete_slide = function(slide) {};

  insert_elm = function(on_slide) {};

  delete_elm = function(elm) {};

  set_position = function(x, y) {};

  bind_draggable = function(elm) {};

  document.addEventListener("keyup", function(event) {
    switch (event.keyCode) {
      case 27:
        return toggle_displays();
    }
  });

  document.getElementById("show-hotkeys").onclick = function() {
    return show_hotkeys();
  };

  _ref = document.getElementsByClassName("element");
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    elm = _ref[_i];
    elm.onclick = function() {
      return bind_show_properties(elm);
    };
  }

  this.impress().init();

}).call(this);
