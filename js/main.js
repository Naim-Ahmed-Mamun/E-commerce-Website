// wow js

new WOW().init();

// navbar

const toggler = document.getElementById("toggle");
const navItems = document.querySelector(".res-menuBar");

document.onclick = event => {
    if (event.target.id !== 'toggle' && event.target.classList !== ("res-menuBar")) {
        toggler.classList.remove("active");
        navItems.classList.remove("active");
    }
}

toggler.addEventListener("click", () => {
    toggler.classList.toggle("active");
    navItems.classList.toggle("active");
})




// navbar 
// var menuBtn = document.getElementById("menuBtn");
// var sideNav = document.getElementById("sideNav");
// var menu = document.getElementById("menu");

// sideNav.style.right = "-800px";
// menuBtn.onclick = function () {
//     if (sideNav.style.right == "-800px") {
//         sideNav.style.right = "0";
//         menuBtn.classList.add("active")
//     }
//     else {
//         sideNav.style.right = "-800px";
//         menuBtn.classList.remove("active")
//     }
// }




window.addEventListener("scroll", function () {
    var navBar = document.querySelector(".navBar");
    navBar.classList.toggle("sticky", window.scrollY > 0);
})
