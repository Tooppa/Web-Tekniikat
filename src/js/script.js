// When button on picture is clicked luku gets the pictures id
// function is used to change the map location
var luku = 0;
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
    //coordinates and images
    var markers = [
        {
            zoom:10,
            koordinaatit: { lat: 60.182215, lng: 24.913401 },
        },
        {
            zoom:14,
            koordinaatit: { lat: 60.182215, lng: 24.913401 },
            image: '<img id="0" src="../src/images/sibelius-4738705_640.jpg" width="300" height="200" onclick="isonna(id)"></img>',
            info: '<p>Avaa isompana painamalla kuvaa</p>'
        },
        {
            zoom:14,
            koordinaatit: { lat: 60.144491, lng: 24.989855 },
            image: '<img id="1" src="../src/images/suomenlinna-334371_640.jpg" width="300" height="200" onclick="isonna(id)"></img>',
            info: '<p>Avaa isompana painamalla kuvaa</p>'
        },
        {
            zoom:14,
            koordinaatit: { lat: 60.170495, lng: 24.952144 },
            image: '<img id="2" src="../src/images/helsinki-4984737_640.jpg" width="300" height="200" onclick="isonna(id)"></img>',
            info: '<p>Avaa isompana painamalla kuvaa</p>'
        },
        {
            zoom : 14,
            koordinaatit: { lat: 60.2933611820065, lng: 24.86623741574194 },
            image: '<img id="3" src="images/vantaankoski-1710134_640.jpg" width="300" height="200" onclick="isonna(id)"></img>',
            info: '<p>Avaa isompana painamalla kuvaa</p>'
        },
        {
            zoom: 14,
            koordinaatit: { lat: 60.174575, lng: 24.984599398411612 },
            image: '<img id="4" src="images/tiger-1415765_640.jpg" width="300" height="200" onclick="isonna(id)"></img>',
            info: '<p>Avaa isompana painamalla kuvaa</p>'
        },
        {
            zoom: 14,
            koordinaatit: { lat: 61.128363, lng: 21.510334 },
            image: '<img id="5" src="images/Rauma.jpg" width="300" height="200" onclick="isonna(id)"></img>',
            info: '<p>Avaa isompana painamalla kuvaa</p>'
        },
        {
            zoom: 14,
            koordinaatit: { lat: 64.240475, lng: 23.817389 },
            image: '<img id="6" src="images/Kalajoki.jpg" width="300" height="200" onclick="isonna(id)"></img>',
            info: '<p>Avaa isompana painamalla kuvaa</p>'
        },
        {
            zoom: 14,
            koordinaatit: { lat: 60.396233, lng: 25.654621 },
            image: '<img id="7" src="images/porvoo.jpg" width="300" height="200" onclick="isonna(id)"></img>',
            info: '<p>Avaa isompana painamalla kuvaa</p>'
        },
        {
            zoom: 13,
            koordinaatit: { lat: 66.543576, lng: 25.847326 },
            image: '<img id="8" src="images/Joulupukin_paja.jpg" width="300" height="200" onclick="isonna(id)"></img>',
            info: '<p>Avaa isompana painamalla kuvaa</p>'
        },
        {
            zoom: 13,
            koordinaatit: { lat: 60.435491, lng: 22.228664 },
            image: '<img id="9" src="images/Turunlinna.jpg" width="300" height="200" onclick="isonna(id)"></img>',
            info: '<p>Avaa isompana painamalla kuvaa</p>'
        },
        {
            zoom: 14,
            koordinaatit: { lat: 69.059973, lng: 20.548734 },
            image: '<img id="10" src="images/Rajapyykkipieni.jpg" width="300" height="200" onclick="isonna(id)"></img>',
            info: '<p>Avaa isompana painamalla kuvaa</p>'
        }
    ];

    //Creates a map with zoom lvl 14 centered around first element of array
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: markers[luku].zoom, center: markers[luku].koordinaatit });
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
        'images/sibelius-Suuri.jpg',
        'images/suomenlinna-Suuri.jpg',
        'images/helsinki-Suuri.jpg',
        'images/vantaankoski-Suuri.jpg',
        'images/tiger-Suuri.jpg',
        'images/Rauma.jpg',
        'images/Kalajoki.jpg',
        'images/porvoo.jpg',
        'images/Joulupukin_paja.jpg',
        'images/Turunlinna.jpg',       
        'images/Rajapyykki.jpg'
    ];
    const popupImage = document.getElementById('popupImage');
    const popupElement = document.getElementById('popup');
    popupElement.style.display = "block"
    popupImage.src = images[id];
}
function video(){
    document.getElementById('media').src = 'videos/Opastus_nähtävyydet.mp4';
}

