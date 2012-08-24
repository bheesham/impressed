
/*
	
	A hopefully easy to use UI for Impress.js
	
	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>
*/


(function() {
  var btn_show_hide, container, visible;

  visible = false;

  container = document.getElementById("controls-inner-container");

  btn_show_hide = document.getElementById("control-show-hide");

  btn_show_hide.onclick = function() {
    if (visible === false) {
      btn_show_hide.innerText = "Hide controls";
      container.style.display = "block";
      visible = true;
    } else {
      btn_show_hide.innerText = "Show controls";
      container.style.display = "none";
      visible = false;
    }
  };

}).call(this);
