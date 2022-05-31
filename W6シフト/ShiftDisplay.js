var target = "";
function MethodLink(){
	var url = document.method.select.options[document.method.select.selectedIndex].value;
	if(url != "" ){
		if(target == 'top'){
			top.location.href = url;
		}
		else if(target == 'blank'){
			window.open(url);
		}
		else if(target != ""){
			eval('parent.' + target + '.location.href = url');
		}
		else{
			location.href = url;
		}

	}

}
function modal(num){
	if (num == "1")
		window.open("../W7週別シフト/WeekDisplay.html", null ,'width=800,height=350');
	else if (num == "2")
		window.open("../W8月別シフト/MonthDisplay.html", null ,'width=600,height=600');
}
modal(NUM);