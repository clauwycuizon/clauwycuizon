/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleMenu() {
	document.getElementById("mobile_Nav").classList.toggle("is_open");
}

window.onclick = function(event) {
	if(!event.target.matches('.mobile_navigation_button')) {

		var dropdowns = document.getElementsByClassName("mobile_Nav_content");
		var i;
		for(i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if(openDropdown.classList.contains('is_open')) {
				openDropdown.classList.remove('is_open');
			}
		}

	}

	
}