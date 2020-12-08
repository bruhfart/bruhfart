let funk = false;

function funky(){
	if(funk){
		let wrong = document.getElementById("wrong");
		wrong.pause();
		wrong.currentTime = 0.1;
		wrong.play();
	}else{
		for (let img of document.getElementsByTagName("img")){
			if(!img.classList.contains("keep")){
				img.setAttribute("width", img.width);
				img.setAttribute("src", "resources/img/funky.png");
			}
		}
		funk = true;
	}
}