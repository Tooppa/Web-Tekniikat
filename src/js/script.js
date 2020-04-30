
var luku = 1;
function sijainti(clicked) {
    luku = clicked;
    initMap();
}
var span = document.getElementsByClassName("close")[0];

// When the user clicks on x close popup
span.onclick = function () {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function initMap() {


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
        content: '<h1>Karaportti 2, Metropolia</h1>'
    });
    //Adds listener to marker and opens infowindow
    marker.addListener('click', function () {
        infoWindow.open(map, marker)
    });

	
    //coordinates and images
    var markers = [
        {
            koordinaatit: { lat: 60.182215, lng: 24.913401 },
            image: '<img id="0" src="../src/images/sibelius-4738705_640.jpg" width="300" height="200" onclick="isonna(id)"></img>',
            info: '<p>Avaa isompana painamalla kuvaa</p>'
        },
        {
            koordinaatit: { lat: 60.144491, lng: 24.989855 },
            image: '<img id="1" src="../src/images/suomenlinna-334371_640.jpg" width="300" height="200" onclick="isonna(id)"></img>',
            info: '<p>Avaa isompana painamalla kuvaa</p>'
        },
        {
            koordinaatit: { lat: 60.170495, lng: 24.952144 },
            image: '<img id="2" src="../src/images/helsinki-4984737_640.jpg" width="300" height="200" onclick="isonna(id)"></img>',
            info: '<p>Avaa isompana painamalla kuvaa</p>'
        },
        {
            koordinaatit: { lat: 60.2933611820065, lng: 24.86623741574194 },
            image: '<img src="images/vantaankoski-1710134_640.jpg" width="300" height="200"></img>'
        },
        {
            koordinaatit: { lat: 60.174575, lng: 24.984599398411612 },
            image: '<img id="4" src="images/tiger-1415765_640.jpg" width="300" height="200" onclick="isonna(id)"></img>',
            info: '<p>Avaa isompana painamalla kuvaa</p>'
        }
    ];

    //Creates a map with zoom lvl 12 centered around first element of array
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 14, center: markers[luku].koordinaatit });
    // creates markers from array
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.koordinaatit,
            map: map,
        });
        //creates infowindow to every marker
        var infoWindow = new google.maps.InfoWindow({
            content: props.info + props.image
        });
        //adds click function to every marker
        marker.addListener('click', function () {
            infoWindow.open(map, marker);
        });

    }
    // Loop through markers
    for (var i = 0; i < markers.length; i++) {
        // Add marker
        addMarker(markers[i]);
    }
}
function isonna(id) {
    const images = [
        '../src/images/sibelius-4738705_640.jpg',
        '../src/images/suomenlinna-334371_640.jpg',
        '../src/images/helsinki-4984737_640.jpg',
        'images/vantaankoski-1710134_640.jpg',
        'images/tiger-1415765_640.jpg'
    ];
    const popupImage = document.getElementById('popupImage');
    const popupElement = document.getElementById('popup');
    popupElement.style.display = "block"
    popupImage.src = images[id];
}

/*switches the nav-active on/off for the navigation bar*/
function changeClass(evt) {
    nav.classList.toggle('nav-active');
    //map.classList.toggle('resize-map')

}

