// JavaScript Document

console.log('JavaScript from js/js.js: up and running!')

//login
window.setTimeout("closeSuccesDiv();", 5000);

function closeSuccesDiv(){
document.getElementById("succes").style.display="none";
}
		

//navigation
function openNav() {
  document.getElementById("navigation").style.width = "100%";
}

function closeNav() {
  document.getElementById("navigation").style.width = "0%";
}


//kort
	mapboxgl.accessToken = 'pk.eyJ1IjoidW5pbWFydGluIiwiYSI6ImNrbWFkaWhnYTB3aDkyd3BocWgwYjFvMWgifQ.j3w6BCqdHN8P15amlvYndg';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/unimartin/cknk49yml1t6f17nk7pjdw5lh', // style URL
center: [10.2165771, 56.1623988], // starting position [lng, lat]
zoom: 13.5 // starting zoom
});

var marker = new mapboxgl.Marker() // kollegie marker
.setLngLat([10.2240417, 56.1648469])
.addTo(map);

var marker = new mapboxgl.Marker() // netto marker
.setLngLat([10.2167568, 56.1643092])
.addTo(map);

var marker = new mapboxgl.Marker() // rema marker
.setLngLat([10.2070225, 56.1602597])
.addTo(map);