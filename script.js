const more = document.getElementById('more');
const sectionDiv = document.getElementById('section-div')

function showDiv() {
 if (sectionDiv.classList.contains('display-none')) {
  sectionDiv.classList.remove('display-none');
  more.innerHTML = "More -";
 }
 else {
  sectionDiv.classList.add('display-none');
  more.innerHTML = "More +";
 }
}

more.addEventListener('click', showDiv);

const menuExpand = document.getElementById('menu-expand');
const menuCollapse = document.getElementById('menu-collapse');
const toExpand = document.getElementById('expand');
const navbar2 = document.getElementById('navbar-2');
const navbar = document.getElementById('navbar');

function menuShow() {
 if (toExpand.classList.contains('display-none')) {
  toExpand.classList.remove('display-none');
  menuCollapse.innerHTML = '<p style="padding-top: 1.2rem; font-size: 1.1rem; font-weight: 400;">Menu <img src="images/icons8-collapse-arrow-24-white.png" alt="collapse-arrow"></p>';
  navbar2.classList.add('display-none');
  navbar.classList.add('display-none');
 }
 else {
  toExpand.classList.add('display-none');
  menuExpand.innerHTML = '<p>Menu <img src="images/icons8-expand-arrow-24.png" alt="expand-arrow"></p>'
  navbar2.classList.remove('display-none');
  navbar.classList.remove('display-none');

 }
}

menuExpand.addEventListener('click', menuShow);
menuCollapse.addEventListener('click', menuShow);


// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar-2").style.top = "0";
//   } else {
//     document.getElementById("navbar-2").style.top = "-4rem";
//   }
//   prevScrollpos = currentScrollPos;
// }
