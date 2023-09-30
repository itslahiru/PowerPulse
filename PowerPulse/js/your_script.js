// Initialize the map
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 }, // Default center
        zoom: 15 // Adjust the zoom level as needed
    });
}

function getUserLocationAndCenterMap() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var userLatitude = position.coords.latitude;
            var userLongitude = position.coords.longitude;

            // Center the map at the user's location
            var userLatLng = new google.maps.LatLng(userLatitude, userLongitude);
            map.setCenter(userLatLng);

            // Create a marker at the user's location
            var marker = new google.maps.Marker({
                position: userLatLng,
                map: map,
                title: 'Your Location'
            });
        }, function(error) {
            console.error('Error getting geolocation:', error);
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
    }
}
