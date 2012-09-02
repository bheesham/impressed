
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
    this.current_properties = this.get_properties(elm);
    document.getElementById("label-property-value-text").style.display = "none";
    document.getElementById("property-value-text").style.display = "none";
    document.getElementById("label-property-value-image").style.display = "none";
    document.getElementById("property-value-image").style.display = "none";
    document.getElementById("label-property-value-html").style.display = "none";
    document.getElementById("property-value-html").style.display = "none";
    document.getElementById("property-style-container").style.display = "none";
    document.getElementById("property-content-type").value = this.current_properties.type;
    switch (this.current_properties.type) {
      case "text":
        document.getElementById("property-style-container").style.display = "block";
        document.getElementById("label-property-value-text").style.display = "block";
        document.getElementById("property-value-text").style.display = "block";
        document.getElementById("property-value-text").value = this.current_properties.value;
        break;
      case "image":
        document.getElementById("label-property-value-image").style.display = "block";
        document.getElementById("property-value-image").style.display = "block";
        document.getElementById("property-value-text").value = this.current_properties.value;
        break;
      case "html":
        document.getElementById("label-property-value-html").style.display = "block";
        document.getElementById("property-value-html").style.display = "block";
    }
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
    var position, properties;
    position = elm.getBoundingClientRect();
    properties = {
      "class": elm.className,
      x: position.left,
      y: position.top,
      tagname: elm.firstChild.tagName.toLowerCase()
    };
    if (elm.firstChild.tagName === "ul" || elm.firstChild.tagName === "ol" || elm.firstChild.tagName === "div") {
      properties.value = elm.inerHTML;
    } else {
      properties.value = elm.innerText;
      switch (properties.tagname) {
        case "h1":
          properties.style = "style-header-1";
          break;
        case "h2":
          properties.style = "style-header-2";
          break;
        case "h3":
          properties.style = "style-header-3";
          break;
        case "h4":
          properties.style = "style-header-4";
          break;
        case "strong":
          properties.style = "style-bold";
          break;
        case "i":
          properties.style = "style-italic";
          break;
        case "small":
          properties.style = "style-small";
          break;
        case "p":
          properties.style = "style-norm";
      }
    }
    switch (properties.tagname) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
      case "strong":
      case "i":
      case "small":
      case "p":
        properties.type = "text";
        break;
      case "ul":
      case "ol":
        properties.type = "list";
        break;
      case "div":
        properties.type = "html";
        break;
      case "img":
        properties.type = "image";
    }
    return properties;
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
