###
	
	A hopefully easy to use UI for Impress.js
	
	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud <http://bheesham.com/>.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###

# Now do our stuff
controls = document.getElementById("controls-container")
slideshow = document.getElementById("impress")

# Be sure to make these avaialbe to the document, we need to edit impress.js
# to stop certain events, and these will help us
document.controls_visible = false
document.properties_visible = false

# The currently selected **element**
current_selected = undefined

# Show or hide all of the different controls
show_menu = -> 
	if document.controls_visible == false
		controls.style.display = "block"
		document.controls_visible = true
	else
		controls.style.display = "none"
		document.controls_visible = false
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

this.impress().init()