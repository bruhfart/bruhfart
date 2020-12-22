let funk = false;

function funky(){
	if(funk){
		let wrong = document.getElementById("wrong");
		wrong.pause();
		wrong.currentTime = 0.1;
		wrong.play();
	}else{
		let ape = document.getElementById("ape");
		for (let img of document.getElementsByTagName("img")){
			if(!img.classList.contains("keep")){
				img.setAttribute("width", img.width);
				img.setAttribute("src", "resources/img/funky.png");
				img.setAttribute("onclick", "ape.pause();ape.currentTime=0;ape.play();")
			}
		}
		funk = true;
	}
}
function bruh(){
	let bruh = document.getElementById("bruh");
	bruh.pause();
	bruh.currentTime=0.8;
	bruh.play();
}