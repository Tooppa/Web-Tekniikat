/*switches the nav-active on/off for the navigation bar*/
function changeClass(evt) {
	nav.classList.toggle('nav-active');
	//map.classList.toggle('resize-map')
}

const nav_button = document.querySelector('.nav_button');
const nav = document.querySelector('.nav_links');
//const map = document.getElementById('map');


nav_button.addEventListener('click', changeClass); 
