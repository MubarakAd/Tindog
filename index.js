var icon=document.getElementById("sun")
icon.onclick= function addNewClass() {
    // Get a reference to all elements with the old class
    var elements = document.querySelectorAll('.old');
    for(var i=0;i<elements.length;i++){
      elements[i].classList.toggle('.old');
      elements[i].classList.toggle('dark-theme');
      if(elements[i].classList.contains('dark-theme')){
        icon.src="images/sun-icon-0.png";
      }
      else{

        icon.src="images/moon_PNG23.png";
      }


    }
    

    // Loop through the selected elements and add the new class using toggle
    
  }
