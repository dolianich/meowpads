
var numberOfDrumButtons = document.querySelectorAll(".meow").length;

for (var i = 0; i<numberOfDrumButtons; i++){
    
    document.querySelectorAll(".meow")[i].addEventListener("click", function(){
       
        var buttonInnerHTML = this.innerHTML;
        
        switch (buttonInnerHTML) {
            case "w":
                var meow1 = new Audio("sounds/meow1.mp3");
                meow1.play();
                
                break;
            case "a":
                var meow2 = new Audio("sounds/meow2.mp3");
                meow2.play();
            break; 
            
            case "s":
                var meow3 = new Audio("sounds/meow3.mp3");
                meow3.play();
            break; 
            
            case "d":
                var meow4 = new Audio("sounds/meow2.mp3");
                meow4.play();
            break; 
            
            case "j":
                var meow5 = new Audio("sounds/meow2.mp3");
                meow5.play();
            break;  

            case "k":
                var meow6 = new Audio("sounds/meow2.mp3");
                meow6.play();
            break;  

            case "l":
                var meow7 = new Audio("sounds/meow2.mp3");
                meow7.play();
            break;  
        
        
        
        
        
        
            default: console.log(buttonInnerHTML);
                break;
        }
    })
}

