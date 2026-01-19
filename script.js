console.log("hello world"); //just for fun XD

 const vid =
    document.getElementById("bg-vid");
    vid.play();
    vid.addEventListener("ended",()=>{
        vid.pause();
    }); 