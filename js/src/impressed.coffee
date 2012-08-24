###
	
	A hopefully easy to use UI for Impress.js
	
	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud <http://bheesham.com/>.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###

visible = false

container 		= document.getElementById("controls-inner-container")
btn_show_hide = document.getElementById("control-show-hide")

# Show or hide all of the different controls
btn_show_hide.onclick = -> 
	if visible == false
		btn_show_hide.innerText = "Hide controls"
		container.style.display = "block"
		visible = true
	else
		btn_show_hide.innerText = "Show controls"
		container.style.display = "none"
		visible = false
	return

# Other stuff will come here