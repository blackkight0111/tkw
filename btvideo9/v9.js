window.onscroll = function (){
	var khoangcach = document.documentElement.scrollTop;
	var menu = document.getElementById('top');

	if (khoangcach>60) {

		menu.style.top="0";
	
	}
	else{

		menu.style.top="-50px";
	}
}