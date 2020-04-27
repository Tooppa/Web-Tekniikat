function initMap() {
    var karaportti = { lat: 60.224289, lng: 24.758614 };
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 12, center: karaportti });
    var marker = new google.maps.Marker({
        position: karaportti,
        map: map,
        title: 'Karaportti 2'
      });
    
    var infoWindow = new google.maps.InfoWindow({
        content : '<h1>Karaportti 2, Metropolia</h1>'
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker)
    });
}