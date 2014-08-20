/**
 *
 */

// =============== GOOGLE MAPS CODE ===============
var map;

google.maps.event.addDomListener(window, 'load', function() {
  var mapOptions = {
    // Zoom and Location
    zoom: 17,
    center: new google.maps.LatLng(42.730174, -73.678784),
    // Controls
    panControl: false,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: false,
    overviewMapControl: false,
    minZoom: 17
  };
  // Map Style
  var styles = [
    {"featureType": "transit.station.bus", "stylers": [{ "visibility": "off" }]},
    {"featureType": "poi", "stylers": [{ "visibility": "off" }]},
    {"featureType": "landscape.man_made", "elementType": "geometry.stroke", "stylers": [{ "visibility": "on" }, { "color": "#000000"}]}
  ];
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  map.setOptions({ styles: styles });

  var num = markers.length;

  for (var i = 0; i < num; i++) {
	var marker = new MarkerWithLabel({
    	position: markers[i].pos,
    	draggable: false,
    	raiseOnDrag: false,
    	map: map,
    	labelContent: markers[i].label,
    	labelAnchor: new google.maps.Point(40, 0),
    	labelClass: "label",
     	labelStyle: {opacity: 1.0},
     	icon: {}
    });
    
	google.maps.event.addListener(marker, "click", function (e) {
    });
  }
});

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
		  message: 'The Weather Queen<br/><br/><img width="400px" src="http://ww2.hdnux.com/photos/15/56/11/3596917/3/628x471.jpg" />',
		  buttons: [
		    $.extend({}, vex.dialog.buttons.YES, {text: 'Let it Rain'}),
		    $.extend({}, vex.dialog.buttons.NO, {text: 'Keep it Sunny'})
		  ]
		});
	});
});

