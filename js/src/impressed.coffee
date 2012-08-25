###
	
	A hopefully easy to use UI for Impress.js
	
	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud <http://bheesham.com/>.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###

# Well, first thing's first. Be sure to keep a list of all events for future
# reference.








# Initialize impress
this.impress().init()

# Now do our stuff
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

show_properties = ->
	return

bind_show_properties = ->
	return

insert_slide = ->
	return

delete_slide = ->
	return

insert_elm = ->
	return

delete_elm = ->
	return

document.addEventListener("keyup", (event) ->
	switch event.keyCode
		when 27 then show_menu()
)