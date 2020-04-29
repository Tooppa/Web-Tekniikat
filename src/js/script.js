/*function initMap() {
    //Element containing coordinates
    var karaportti = { lat: 60.224289, lng: 24.758614 };
    //Creates a map with zoom lvl 12 centered around karaportti
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 12, center: karaportti });
    //Creates a marker in karaportti with title karaportti 2
    var marker = new google.maps.Marker({
        position: karaportti,
        map: map,
        title: 'Karaportti 2'
      });
    //Creates infowindow with h1 tag
    var infoWindow = new google.maps.InfoWindow({
        content : '<h1>Karaportti 2, Metropolia</h1>'
    });
    //Adds listener to marker and opens infowindow
    marker.addListener('click', function() {
        infoWindow.open(map, marker)
    });
	
	//
}/*

/*switches the nav-active on/off for the navigation bar*/
function changeClass(evt) {
	nav.classList.toggle('nav-active');
}

const nav_button = document.querySelector('.nav_button');
const nav = document.querySelector('.nav_links');

nav_button.addEventListener('click', changeClass); 
