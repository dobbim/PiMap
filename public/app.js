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

vex.defaultOptions.className = 'vex-theme-os';

$(document).ready(function() {
	$(".logo").click(function() {
		vex.dialog.alert({
		  message: "Created by:<ul><li>Matt Dobbins '18</li><li>Justin Etzine '18</li><li>Robbie Kubiniec '18</li><li>Nick Thomson '18</li><li><em>Mentor: Jake Martin '16</em></li></ul>Created in less than 24 hours as part of the NRB HackRPI 2014 program."
		});
	});
	
	var easter_egg = new Konami(function() {
		vex.dialog.alert({
		  message: '<img width="400px" src="http://ww2.hdnux.com/photos/15/56/11/3596917/3/628x471.jpg" />',
		  buttons: [
		    $.extend({}, vex.dialog.buttons.YES, {
		      text: 'Let it Rain'
		    })
		  ]
		});
	});
});

