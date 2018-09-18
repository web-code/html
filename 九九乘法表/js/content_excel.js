let oUl = document.getElementsByTagName("ul")[0],
	obj = "";
	
for (let x=1;x<=9;x++) {
	let str = "";
	for (let y=1;y<=x;y++){
		str += "<span>"+ x +"*"+ y + "=" + x*y +"</span>";
	};
	obj += "<li>"+str+"</li>"
};
oUl.innerHTML += obj;