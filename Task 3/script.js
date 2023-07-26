// Function to display the Smallnav
function openNav() {
  document.querySelector(".sidenav").style.width = "50%";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.querySelector(".sidenav").classList.add("open");
}

// Function to close the Smallnav
function closeNav() {
  document.querySelector(".sidenav").style.width = "0";
  document.body.style.backgroundColor = "rgba(0,0,0,0)";
  document.querySelector(".sidenav").classList.remove("open");
}
