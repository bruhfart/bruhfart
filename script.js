let funk = false;

function funky(){
	if(funk){
		let wrong = document.getElementById("wrong");
		wrong.pause();
		wrong.currentTime = 0.1;
		wrong.play();
	}else{
        let n = 0;
		for(let img of document.getElementsByTagName("img")){
			if(!img.classList.contains("keep")){
				img.setAttribute("width", img.width);
				img.setAttribute("src", "resources/img/funky.png");
                let s = "ape" + n;
                eval("window."+s+" = document.createElement('audio');"+s+".className = 'ape';"+s+".setAttribute('src', 'resources/audio/giant-ape.mp3');");
                if(h)
                    eval("s.loop = true;");
                eval("img.parentElement.insertBefore("+s+",img);");
				img.setAttribute("onclick", s+".pause();"+s+".currentTime=0;"+s+".play();")
			}
            n++;
		}
		funk = true;
	}
}

let h = false;

function hloop(){
    h = !h;
    for(let a of document.getElementsByClassName("ape"))
        a.loop = h;
}

function bruh(){
	let bruh = document.getElementById("bruh");
	bruh.pause();
	bruh.currentTime=0.8;
	bruh.play();
}

document.onkeypress = function(e){
    console.log(e.keyCode);
    if(e.keyCode == 104)
        hloop();
}