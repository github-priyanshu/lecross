var mu=new Audio("audio.mp3");
var play=false;
var prevPlayed;

opp(".rightBtn").forEach(val=>{
	val.firstElementChild.addEventListener('click',()=>{
		try{
			if(!prevPlayed.isEqualNode(val.firstElementChild.firstElementChild)){
				prevPlayed.innerHTML="play_arrow"
			}
		}catch(e){}
		prevPlayed=val.firstElementChild.firstElementChild;

		if(prevPlayed.innerHTML=="play_arrow"){
			mu.currentTime=0;
			mu.play();
			play=true;

			prevPlayed.innerHTML='pause'
		}else{
			mu.pause();
			play=false;
			prevPlayed.innerHTML='play_arrow'
		}

	})
})
mu.play();