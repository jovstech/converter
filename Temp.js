let celRef = document.getElementById("cel");
let farRef = document.getElementById("far");

let convertFromcel = () => {
    let cel = celRef.value;
    farRef.value = (cel * (9/5)+32).toFixed(2);
    
};

let convertFromfar = () => {
    let far = farRef.value;
    celRef.value = (far / (9/5)-17.78).toFixed(2);
};    

celRef.addEventListener("input",convertFromcel);
farRef.addEventListener("input",convertFromfar);


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }