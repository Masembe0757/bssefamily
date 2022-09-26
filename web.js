var univ = document.getElementById('uni')
var second = document.getElementById("sec")
var prim = document.getElementById("pri")
var ADD = document.getElementById("but")
var list = document.getElementById("ull")
var Ord = document.getElementById("oll")
var personal = document.getElementById("ps")
var hB = document.getElementById("hobb")
const Photo = document.getElementById("ph");
var disp = document.getElementById("up");
var BOD = document.getElementById("bod");
var uploaded = "";

BOD.onload = function(){
	var name = window.prompt("Enter your name here")
	alert("hello"+" "+name+" "+"welcome to Bsse Family chat site. it will be alot of fun with you around.");
}

Photo.onchange = function(){
	disp.src = URL.createObjectURL(event.target.files[0]);
}

var x = 1;
ADD.onclick = function(){

	var hobby = hB.value;
	hB.value = " ";
	var university = univ.value;
	univ.value =" ";
	var secondary = second.value;
	second.value =" ";
	var primary = prim.value;
	prim.value = " ";
	var pers = personal.value;
	personal.value =" ";
	
		while(hobby ==""&&university==""&&secondary==""&&primary==""&&pers==""){
		alert("Can not create an empty profile, please enter profile details!")
		univ.focus();
		return fase;
	}
	

	var li =document.createElement("li")
	var txt =document.createElement("p")
	var state = document.createElement("p")
	var Rem =document.createElement("button")
	var Edi =document.createElement("button")
	var Col =document.createElement("button")
	var Siz =document.createElement("button")



	li.appendChild(txt);
	txt.textContent = "Profile"+" "+x+" : "+"Attended university at"+"  "+university+" , "+"Attended secondary at "+secondary+" , "+"Attended primary at "+primary+" and "+"He likes"+" "+hobby;
	li.appendChild(state)
	state.textContent = "Personal statement: "+pers;
	li.appendChild(Rem)
	Rem.innerHTML= "Remove profile"
	li.appendChild(Col)
	Col.innerHTML= "change color"
	li.appendChild(Siz)
	Siz.innerHTML= "change background color"
	li.appendChild(Edi)
	Edi.innerHTML= "Edit profile"
	Siz.onclick = function(){
		var you = prompt("Enter desired backgroundcolor")
		txt.style.backgroundColor =  you;
		state.style.backgroundColor = you;
	}

	Col.onclick = function(){
		var you = prompt("Enter desired color")
		txt.style.color = you;
		state.style.color = you;
	}

	



	list.appendChild(li)
	Edi.onclick = function(){
		
		li.contentEditable = true;
		Rem.contentEditable = false;
		Edi.contentEditable = false;
		var Sav =document.createElement("button")
		li.appendChild(Sav)
		Sav.textContent = "save"
		list.style.backgroundcolor = "grey";
		Sav.onclick = function(){
			li.contentEditable = false;
			li.removeChild(Sav)
		}
		
	}




	Rem.onclick = function(){
		list.removeChild(li);
	}
	univ.focus();
++x
}