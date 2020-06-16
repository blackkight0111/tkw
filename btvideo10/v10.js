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
function tk() {
	var nhap = document.getElementById('khunginput');

	console.log(nhap);
	if(nhap.style.opacity =="0"){
		nhap.style.top="55px";
		nhap.style.opacity = "1";
	}
	else{
		nhap.style.opacity ="0";
		nhap.style.top="100px";
	}
	
}