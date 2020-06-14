window.onscroll=function(){
	var khoangcach = document.documentElement.scrollTop;
	var menu = document.getElementById('top');
	var mnew = document.getElementById("menunew");
	var mnew1 = document.getElementById("menunew1");
	if (khoangcach>90) {
		menu.classList.add("fixedmenu");

		
		mnew.classList.add("annew");
		mnew.classList.remove("hiennew");
		mnew1.classList.remove("annew");
		mnew1.classList.add("hiennew");
		// mnew1.style.opacity="1";
		// mnew1.style.visibility="visible"
		// mnew1.style.width="60px";
		// mnew.style.opacity="0";
		// mnew.style.width="0px";
	}
	else{
		menu.classList.remove("fixedmenu");
		// mnew1.style.opacity="0";
		// mnew1.style.visibility="hiden"
		// mnew1.style.width="0px";
		// mnew.style.opacity="1";
		// mnew.style.width="50px";
		
		mnew.classList.remove("annew");
		mnew.classList.add("hiennew");
		mnew1.classList.add("annew");
		mnew1.classList.remove("hiennew");
	}

}