###
	
	A hopefully easy to use UI for Impress.js
	
	@author 		Bheesham Persaud <bheesham.persaud@live.ca>
	@copyright 	Copyright (C) 2012 Bheesham Persaud <http://bheesham.com/>.
	@license 		Beerware <http://wikipedia.org/wiki/Beerware>

###

Impressed = ->
	this.controls = this.properties = this.hotkeys = this.slideshow = undefined
	return

# Controls for displaying views
Impressed.prototype.toggle_displays = ->
	if document.controls_visible == false and 
	document.properties_visible == false and
	document.hotkeys_visible == false
		this.show_controls()
	else
		this.hide_properties()
		this.hide_controls()
		this.hide_hotkeys()


Impressed.prototype.show_controls = ->
	this.hide_properties()
	this.hide_hotkeys()
	document.controls_visible = true
	this.controls.style.display = "block"

Impressed.prototype.show_properties = (elm) ->
	this.hide_properties()
	this.hide_controls()
	this.hide_hotkeys()

	this.current_selected = elm
	this.current_properties = get_properties(elm)
	
	# Be sure to change the properties dialog as needed here

	document.properties_visible = true
	this.properties.style.display = "block"

Impressed.prototype.show_hotkeys = ->
	this.hide_properties()
	this.hide_controls()
	document.hotkeys_visible = true
	this.hotkeys.style.display = "block"

Impressed.prototype.hide_controls = ->
	document.controls_visible = false
	this.controls.style.display = "none"

Impressed.prototype.hide_properties = ->
	this.current_selected = undefined
	document.properties_visible = false
	this.properties.style.display = "none"

Impressed.prototype.hide_hotkeys = ->
	document.hotkeys_visible = false
	this.hotkeys.style.display = "none"

Impressed.prototype.get_properties = (elm) ->
	position = elm.getBoundingClientRect();
	return {
		tagname: 	elm.tagName.toLowerCase()
		class: 		elm.className
		x: 				position.left
		y: 				position.top
		value: 		elm.innerText
	}

Impressed.prototype.insert_slide = (prev_slide) ->
	return

Impressed.prototype.delete_slide = (slide) ->
	return

Impressed.prototype.insert_elm = (on_slide) ->
	return

Impressed.prototype.delete_elm = (elm) ->
	return

Impressed.prototype.set_position = (x, y) ->
	return

Impressed.prototype.bind_draggable = (elm) ->
	return


impressed = new Impressed

# Set the elements that we will need to manipulate
impressed.controls 		= document.getElementById("controls-container")
impressed.properties 	= document.getElementById("properties-container")
impressed.hotkeys 		= document.getElementById("hotkeys-container")
impressed.slideshow 	= document.getElementById("impress")

# Be sure to make these avaialbe to the document, we need to edit impress.js
# to stop certain events, and these will help us
document.controls_visible = false
document.properties_visible = false
document.hotkeys_visible = false

# The currently selected **element**
impressed.current_selected = undefined

# Toggle the displays
document.addEventListener("keyup", 
	(event) ->
		switch event.keyCode
			when 27 then impressed.toggle_displays()
)

# Show the hotkeys
document.getElementById("show-hotkeys").onclick = ->
	impressed.show_hotkeys()

# Show the properties when you click on an element
for elm in document.getElementsByClassName("element")
	elm.onclick = ->
		impressed.show_properties(this)

this.impress().init()
impressed.show_controls()