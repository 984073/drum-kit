for( var i=0; i<document.querySelectorAll(".drum").length; i++){


document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var buttoninner= this.innerHTML;
    makesound(buttoninner);
    buttonAnimate(buttoninner);


});
}
//keypress event
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimate(event.key)
});
 function makesound(key){
    switch(key){
        case "w":
           var tom= new Audio("sounds/tom-1.mp3");
           tom.play();
         break;
         case "a":
            var tom1= new Audio("sounds/tom-2.mp3");
            tom1.play();
          break;
         case "s":
            var tom2= new Audio("sounds/tom-3.mp3");
            tom2.play();
          break;
          case "d":
            var tom3= new Audio("sounds/tom-4.mp3");
            tom3.play();
          break;
          case "j":
            var tom4= new Audio("sounds/snare.mp3");
            tom4.play();
          break;
          case "k":
            var tom5= new Audio("sounds/crash.mp3");
            tom5.play();
          break;
          case "l":
            var tom6= new Audio("sounds/kick-bass.mp3");
            tom6.play();
          break;
   default:
    }
    
 }
 function buttonAnimate(passinkey){
    var activeButton = document.querySelector("."+ passinkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);

 }