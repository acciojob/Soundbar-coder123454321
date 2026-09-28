//your JS code here. If required.
const buttons=document.querySelectorAll(".btn");
const stop=document.querySelector(".stop");
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const soundName=button.innerText;
        audio=new audio("sounds/" + soundName + ".mp3");
        audio.play();
    })
})
stop.addEventListener("click",()=>{
        if(audio){
            audio.pause();
            audio.currentTime=0;
        }
    })