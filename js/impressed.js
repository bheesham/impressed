
/*
	
	A hopefully easy to use UI for Impress.js
	
	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud <http://bheesham.com/>.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>
*/


(function() {
  var Impressed, elm, impressed, _i, _len, _ref;

  Impressed = function() {
    this.controls = this.properties = this.hotkeys = this.slideshow = void 0;
  };

  Impressed.prototype.toggle_displays = function() {
    if (document.controls_visible === false && document.properties_visible === false && document.hotkeys_visible === false) {
      return this.show_controls();
    } else {
      this.hide_properties();
      this.hide_controls();
      return this.hide_hotkeys();
    }
  };

  Impressed.prototype.show_controls = function() {
    this.hide_properties();
    this.hide_hotkeys();
    document.controls_visible = true;
    return this.controls.style.display = "block";
  };

  Impressed.prototype.show_properties = function(elm) {
    this.hide_properties();
    this.hide_controls();
    this.hide_hotkeys();
    this.current_selected = elm;
    this.current_properties = get_properties(elm);
    document.properties_visible = true;
    return this.properties.style.display = "block";
  };

  Impressed.prototype.show_hotkeys = function() {
    this.hide_properties();
    this.hide_controls();
    document.hotkeys_visible = true;
    return this.hotkeys.style.display = "block";
  };

  Impressed.prototype.hide_controls = function() {
    document.controls_visible = false;
    return this.controls.style.display = "none";
  };

  Impressed.prototype.hide_properties = function() {
    this.current_selected = void 0;
    document.properties_visible = false;
    return this.properties.style.display = "none";
  };

  Impressed.prototype.hide_hotkeys = function() {
    document.hotkeys_visible = false;
    return this.hotkeys.style.display = "none";
  };

  Impressed.prototype.get_properties = function(elm) {
    var position;
    position = elm.getBoundingClientRect();
    return {
      tagname: elm.tagName.toLowerCase(),
      "class": elm.className,
      x: position.left,
      y: position.top,
      value: elm.innerText
    };
  };

  Impressed.prototype.insert_slide = function(prev_slide) {};

  Impressed.prototype.delete_slide = function(slide) {};

  Impressed.prototype.insert_elm = function(on_slide) {};

  Impressed.prototype.delete_elm = function(elm) {};

  Impressed.prototype.set_position = function(x, y) {};

  Impressed.prototype.bind_draggable = function(elm) {};

  impressed = new Impressed;

  impressed.controls = document.getElementById("controls-container");

  impressed.properties = document.getElementById("properties-container");

  impressed.hotkeys = document.getElementById("hotkeys-container");

  impressed.slideshow = document.getElementById("impress");

  document.controls_visible = false;

  document.properties_visible = false;

  document.hotkeys_visible = false;

  impressed.current_selected = void 0;

  document.addEventListener("keyup", function(event) {
    switch (event.keyCode) {
      case 27:
        return impressed.toggle_displays();
    }
  });

  document.getElementById("show-hotkeys").onclick = function() {
    return impressed.show_hotkeys();
  };

  _ref = document.getElementsByClassName("element");
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    elm = _ref[_i];
    elm.onclick = function() {
      return impressed.show_properties(this);
    };
  }

  this.impress().init();

  impressed.show_controls();

}).call(this);
