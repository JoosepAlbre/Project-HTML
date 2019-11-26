var acc = document.getElementsByClassName("küsimus");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the vastus */
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active vastus */
    var vastus = this.nextElementSibling;
    console.log(vastus);
    if (vastus.style.display == "block") {
      vastus.style.display = "none";
    } else {
      vastus.style.display = "block";
    }
  });
}