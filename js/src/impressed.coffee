###
	
	A hopefully easy to use UI for Impress.js
	
	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud <http://bheesham.com/>.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###

controls = document.getElementById("controls-container")
slideshow = document.getElementById("impress")

controls_visible = false
properties_visible = false

current_selected = undefined

# Show or hide all of the different controls
show_menu = -> 
	if controls_visible == false
		controls.style.display = "block"
		controls_visible = true
	else
		controls.style.display = "none"
		controls_visible = false
	return

document.addEventListener("keyup", (event) ->
	switch event.keyCode
		when 27
			show_menu()
		when 73
			# Insert
		when 68
			# Delete
)

this.impress().init()