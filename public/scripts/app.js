/**
 *
 */

vex.defaultOptions.className = 'vex-theme-top';

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

  //Function to create a marker
  function createMarker(pos, label, desc) {
	var marker = new MarkerWithLabel({
    	position: pos,
    	draggable: false,
    	raiseOnDrag: false,
    	map: map,
    	labelContent: label,
    	labelAnchor: new google.maps.Point(40, 0),
    	labelClass: "label",
     	labelStyle: {opacity: 1.0},
     	icon: {},
		description: desc
    });
    
	google.maps.event.addListener(marker, "click", function (e) {
		vex.dialog.alert({
			message: '<strong>' + marker.labelContent + '</strong>' + ((marker.description !== '') ? '<br>' + marker.description : ''),
			buttons: [
				$.extend({}, vex.dialog.buttons.YES, {text: 'OK'})
			]
		});
    });
	
	return marker;
  }

  var num = markers.length;
  var allMarkers = [];

  for (var i = 0; i < num; i++) {
    allMarkers.push(createMarker(markers[i].pos, markers[i].label, markers[i].desc));
  }

  // Detect changes in map type
  google.maps.event.addListener(map, "maptypeid_changed", function () {
    // Change css to "label" or "labelSat"
    for (var i = 0; i < num; i++) {
      if (map.getMapTypeId() == google.maps.MapTypeId.HYBRID) {
        allMarkers[i].labelClass = "labelSat";
      } else {
        allMarkers[i].labelClass = "label";
      }
      allMarkers[i].label.draw();
    }
  });
});

// ============= END GOOGLE MAPS CODE =============

$(document).ready(function() {
	$(".logo").click(function() {
		vex.dialog.alert({
		  message: "<strong>&#x3c0;Map - Dynamic Campus Map for RPI</strong><br>Created by:<ul><li>Matt Dobbins '18</li><li>Justin Etzine '18</li><li>Robbie Kubiniec '18</li><li>Nick Thomson '18</li><li><em>Mentor: Jake Martin '16</em></li></ul>Created in less than 24 hours as part of the NRB HackRPI 2014 program."
		});
	});
	
	var easter_egg = new Konami(function() {
		vex.dialog.alert({
		  message: '<strong>The Weather Queen</strong><br/><br/><img width="400px" src="http://ww2.hdnux.com/photos/15/56/11/3596917/3/628x471.jpg" />',
		  buttons: [
		    $.extend({}, vex.dialog.buttons.YES, {text: 'Let it Rain'}),
		    $.extend({}, vex.dialog.buttons.NO, {text: 'Keep it Sunny'})
		  ]
		});
	});
});

