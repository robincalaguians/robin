"use strict"
let post = 0;
let speed = 50;
let str = document.getElementById('str').innerHTML;
document.getElementById('str').innerHTML = "";


function type(){
	if(post < str.length){
		document.getElementById('str').innerHTML += str.charAt(post);
		post++;
		setTimeout(type , speed);
		
	}else{
		setTimeout(erase , speed);
	}
}
setTimeout(type , speed);

function erase()
	{
	if(post >= 0){
		let temp = str.substring(0 , post);
		document.getElementById('str').innerHTML  = temp;
		post --;
		setTimeout(erase, speed);
	}else{
		setTimeout(type, speed);
	}
}





