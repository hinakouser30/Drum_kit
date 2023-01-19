var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
    
  });
}
 
document.addEventListener("keypress",function(event){
   makeSound(event.key);

   buttonAnimation(event.key);
});


function makeSound(key){
  
  switch (key) {

    case "w":
      var tom1a = new Audio("tom-1.mp3");
      tom1a.play();
      break;

    case "a":
      var tom2a = new Audio("tom-2.mp3");
      tom2a.play();
      break;

    case "s":
      var tom3a= new Audio("tom-3.mp3");
      tom3a.play();
      break;

    case "d":
      var tom4a = new Audio("tom-4.mp3");
      tom4a.play();
      break;

    case "j":
      var snarea = new Audio("snare.mp3");
      snarea.play();
      break;

    case "k":
      var crasha = new Audio("crash.mp3");
      crasha.play();
      break;

    case "l":
      var kicka = new Audio("kick-bass.mp3");
      kicka.play();
      break;

    default: console.log(key);
  }

}

function buttonAnimation(currentKey){

  var activeButton=document.querySelector("."+currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");},100
  );


}