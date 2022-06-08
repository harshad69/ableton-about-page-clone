const more = document.getElementById('more');
const sectionDiv = document.getElementById('section-div')

function showDiv() {
 if (sectionDiv.classList.contains('display-none')) {
  sectionDiv.classList.remove('display-none')
  more.innerHTML = "More -"
 }
 else {
  sectionDiv.classList.add('display-none')
  more.innerHTML = "More +"
 }
}

more.addEventListener('click', showDiv);