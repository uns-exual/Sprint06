function myFunction_Constitution() {
    location.href = "FSANTConstitution.html"
}

function myFunction_Conduct() {
    location.href = "CodeofConduct.html"
}

const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  menu.classList.toggle('active');
});

function myFunctionMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }