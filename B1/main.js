// Tạo bản đồ và đặt vị trí trung tâm
var mymap = L.map('map').setView([16.2740138, 106.8927121], 5.4);

var marker = L.marker([21.0227346, 105.7957638]).addTo(mymap);
marker.bindPopup("Hà Nội").openPopup();

var popup = L.popup()
    .setLatLng([10.0341844, 105.7163704,])
    .setContent("Xin chào Cần Thơ")
    .openOn(mymap);




var icon = L.icon({
    iconUrl: 'https://lh5.googleusercontent.com/p/AF1QipPaoto4XQu388tFVAcE2ywUcjoUGxELwyj4DU1F=w215-h280-p-k-no',
    iconSize: [30, 30]
});
var marker = L.marker([16.4533864, 107.5359133], { icon: icon }).addTo(mymap);

var marker = L.marker([10.0341844, 105.7163704]).addTo(mymap);
mymap.on('click', function (e) {
    marker.setLatLng(e.latlng);
});

var googlemap = L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(mymap);

var oms = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var Move = L.popup();
    function onMapClick(e) {
        Move
            .setLatLng(e.latlng)
            .setContent("Vị trí" + e.latlng)
            .openOn(mymap);
    }
mymap.on('click', onMapClick);




var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'khanhnhat188/cltr81x2800d901pjavlg7uer',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2hhbmhuaGF0MTg4IiwiYSI6ImNrcjNqMWxyNzIwNG0yb3F1NjNhcGhheDEifQ.fhWAK0Zr94gpqbU8ySZNmA'
}).addTo(mymap);

var tinh = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'khanhnhat188/cltse7okk011j01pkbv45bt0y',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2hhbmhuaGF0MTg4IiwiYSI6ImNrcjNqMWxyNzIwNG0yb3F1NjNhcGhheDEifQ.fhWAK0Zr94gpqbU8ySZNmA'
}).addTo(mymap);

var baseLayers = {
    "OpenStreetMap": oms,
    "Giao Thông Cần Thơ": mapbox,
    "Tỉnh": tinh,
    "Google Map": googlemap,
};

var controlLayers = L.control.layers(baseLayers).addTo(mymap);




