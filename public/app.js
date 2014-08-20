/**
 *
 */

// =============== GOOGLE MAPS CODE ===============

var map;
function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(42.730174, -73.678784),

    // Controls
    panControl: false,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: false,
    overviewMapControl: false
  };
  var styles = [
    {
      "featureType": "transit.station.bus",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "poi",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry.stroke",
      "stylers": [{ "visibility": "on" }, { "color": "#000000"}]
    }
  ];
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  map.setOptions({ styles: styles });
}

google.maps.event.addDomListener(window, 'load', initialize);

// ============= END GOOGLE MAPS CODE =============


$(document).ready(function() {
	var aboutShown = false;
	$(".logo").click(function() {
		if(!aboutShown) {
			alert("Created by Matt Dobbins ('18), Justin Etzine ('18), Robbie Kubiniec ('18), and Nick Thomson ('18), with the help of Jake Martin ('16)." +
			"\n\nCreated in less than 24 hours as part of the NRB HackRPI 2014 program.");
			aboutShown = true;
		}
	});
	
	var easter_egg = new Konami(function() {
		$("body").append('<div class="konami"><img src="http://ww2.hdnux.com/photos/15/56/11/3596917/3/628x471.jpg" /><h1>"Let it Rain"</h1></div>');
		
		$(".konami").click(function() {
			$(".konami").remove();
		});
	});
});

