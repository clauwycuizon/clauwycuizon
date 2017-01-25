/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleMenu(){
	var mobileNav = document.getElementsByClass('header_navigation_mobile');
	if(mobileNav.style.display == "none"){
		mobileNav.style.display == "block";
	}
	else{
		mobileNav.display = "none";
	}
}
