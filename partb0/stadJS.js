function enableAltPics() {
    var allimages = document.getElementsByTagName("img");
    var preloadimages = [];
    var classes, src;
    for (var i = 0; i < allimages.length; i++) {
        classes = allimages[i].className;
        if (classes) { // <img includes classes
            if (classes.search("\\baltImg\\b") != -1) { // <img classes include "altImg"
                src = allimages[i].getAttribute("src");
                if (src.charAt[src.length - 5] != "b") { // protect against attempted second loading when src has been altered
                    preloadimages.push(new Image()); //preload alternate image
                    preloadimages[preloadimages.length - 1].src = src.slice(0, -4) + "b.jpg";
                    allimages[i].onmouseover = function () { // add terminal "b" to title & filename
                        var src = this.getAttribute("src"),
                            title = this.getAttribute("title");
                        if (title.charAt[title.length - 1] != "b") {
                            this.setAttribute("title", title + "b");
                            this.setAttribute("src", src.slice(0, -4) + "b.jpg");
                        } //end if
                    } // end function
                    allimages[i].onmouseout = function () { // delete terminal "b" from title & filename
                        var src = this.getAttribute("src"),
                            title = this.getAttribute("title");
                        //						if (title.charAt[title.length-1] == "b"){
                        this.setAttribute("title", title.slice(0, -1));
                        this.setAttribute("src", src.slice(0, -5) + ".jpg");
                        //						} //end if
                    } // end function
                } //end if
            } //end if
        } //end if
    } //end for
} // end function

/* When the user clicks on the dropdown menu button, toggle between hiding and showing the dropdown menu content */
function showHideDropdownMenu() {
	document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

	var dropdowns = document.getElementsByClassName("dropdownMenu-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
	  var openDropdown = dropdowns[i];
	  if (openDropdown.classList.contains('show')) {
		openDropdown.classList.remove('show');
	  } //end if
	} //end if
  } //end if
} // end function
