window.onscroll=function(){
	var khoangcach = document.documentElement.scrollTop;
	var menu = document.getElementById('top');
	if (khoangcach>90) {
		menu.classList.add("fixedmenu");
	}
	else{
		menu.classList.remove("fixedmenu");
	}

}