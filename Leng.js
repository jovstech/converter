
let kmRef = document.getElementById("km");
let ydRef = document.getElementById("yd");

let convertFromkm = () => {
    let km = kmRef.value;
    ydRef.value = (km * 1.09361).toFixed(2);
    
};

let convertFromyd = () => {
    let yd = ydRef.value;
    kmRef.value = (yd / 1.09361).toFixed(2);
    
};

kmRef.addEventListener("input",convertFromkm);
ydRef.addEventListener("input",convertFromyd);


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