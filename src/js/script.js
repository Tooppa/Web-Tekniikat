function initMap() {
    //coordinates and images
    var markers = [
        {
            koordinaatit: { lat: 60.182215, lng: 24.913401 },
            image: '<img src="../src/images/sibelius-4738705_640.jpg" width="300" height="200"></img>'
        },
        {
            koordinaatit: { lat: 60.144491, lng: 24.989855 },
            image: '<img src="../src/images/suomenlinna-334371_640.jpg" width="300" height="200"></img>'
        },
        {
            koordinaatit: { lat: 60.170495, lng: 24.952144 },
            image: '<img src="../src/images/helsinki-4984737_640.jpg" width="300" height="200"></img>'
        }
    ];
    //Creates a map with zoom lvl 12 centered around first element of array
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 13, center: markers[0].koordinaatit });
    // creates markers from array
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.koordinaatit,
            map: map,
        });
        //creates infowindow to every marker
        var infoWindow = new google.maps.InfoWindow({
            content: props.image
        });
        //adds click function to every marker
        marker.addListener('click', function () {
            infoWindow.open(map, marker);
        });

    }
    // Loop through markers
    for(var i = 0;i < markers.length;i++){
        // Add marker
        addMarker(markers[i]);
      }
}

/*switches the nav-active on/off for the navigation bar*/
function changeClass(evt) {
    nav.classList.toggle('nav-active');
    //map.classList.toggle('resize-map')
}

const nav_button = document.querySelector('.nav_button');
const nav = document.querySelector('.nav_links');
//const map = document.getElementById('map');


nav_button.addEventListener('click', changeClass); 
