###
	
	A hopefully easy to use UI for Impress.js
	
	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud <http://bheesham.com/>.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###


controls = document.getElementById("controls-container")
properties = document.getElementById("properties-container")
hotkeys = document.getElementById("hotkeys-container")

slideshow = document.getElementById("impress")

# Be sure to make these avaialbe to the document, we need to edit impress.js
# to stop certain events, and these will help us
document.controls_visible = false
document.properties_visible = false
document.hotkeys = false

# The currently selected **element**
current_selected = undefined

# Controls for displaying views
toggle_displays = ->
	if document.controls_visible == true
		hide_controls()
	else 
		show_controls()
	if document.properties_visible == true
		hide_properties()
	if document.hotkeys_visible == true
		hide_hotkeys()

show_properties = ->
	hide_controls()
	hide_hotkeys()
	document.properties_visible = true
	properties.style.display = "block"

show_controls = ->
	hide_properties()
	hide_hotkeys()
	document.controls_visible = true
	controls.style.display = "block"

show_hotkeys = ->
	hide_properties()
	hide_controls()
	document.hotkeys_visible = true
	hotkeys.style.display = "block"

hide_properties = ->
	document.properties_visible = false
	properties.style.display = "none"

hide_controls = ->
	document.controls_visible = false
	controls.style.display = "none"

hide_hotkeys = ->
	document.hotkeys_visible = false
	hotkeys.style.display = "none"

get_properties = (elm) ->
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

document.addEventListener("keyup", 
	(event) ->
		switch event.keyCode
			when 27 then toggle_displays()
)

document.getElementById("show-hotkeys").onclick = ->
	show_hotkeys()

this.impress().init()