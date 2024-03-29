var mymap = L.map('map').setView([10.0465282,105.7850602], 13);




/* var popup = L.popup()
    .setLatLng([10.0341844, 105.7163704,])
    .setContent("Xin chào Cần Thơ")
    .openOn(mymap); */
/* 
var icon = L.icon({
    iconUrl: 'https://lh5.googleusercontent.com/p/AF1QipPaoto4XQu388tFVAcE2ywUcjoUGxELwyj4DU1F=w215-h280-p-k-no',
    iconSize: [30, 30]
});
 var marker = L.marker([16.4533864, 107.5359133], { icon: icon }).addTo(mymap); */

// Cau 1
 mymap.on('click', function(e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;

    lat = Math.round(lat * 100) / 100;
    lng = Math.round(lng * 100) / 100;
    var popup = new L.popup ([lat, lng],  { draggable: 'true' }).addTo(mymap);
    popup.setContent("Kinh độ: " + lng + "<br> Vĩ độ: " + lat);

});
/*
mymap.on('click', function(e) {
    mymap.eachLayer(function(layer) {
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;
        if (layer instanceof L.Marker) {
            mymap.removeLayer(layer);
        }
    });

    var newMarker = L.marker(e.latlng,{ draggable: 'true' }).addTo(mymap);
});
 */


var coordinates  = [
    {Name : "Quận Ninh Kiều", Lat: 10.032778, Lng: 105.759444},
    {Name : "Quận Bình Thuỷ", Lat: 10.0747762, Lng: 105.7312255},
    {Name : "Quận Cái Răng", Lat: 9.9855636, Lng: 105.770833},
    {Name : "Quận Ô Môn", Lat: 10.1246436, Lng: 105.6473641},
    {Name : "Quận Thốt Nốt", Lat: 10.2724721, Lng: 105.548611},	
]

// add marker corresponding to each coordinate
coordinates.forEach(function(coordinate) {
    var marker = L.marker([coordinate.Lat, coordinate.Lng]).addTo(mymap);
    marker.bindPopup(coordinate.Name);
});




var oms = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);
//Tìm kiếm
L.Control.geocoder().addTo(mymap);

//Lấy vị trí
mymap.locate({setView: true, maxZoom: 16});
function onLocationFound(e) {
    var radius = e.accuracy;
    var location = e.latlng;
    L.marker(location).addTo(mymap)
        .bindPopup("Vị trí hiện tại của bạn").openPopup();


}

mymap.on('locationfound', onLocationFound);

var baseLayers = {
    "OpenStreetMap": oms,
};

var controlLayers = L.control.layers(baseLayers).addTo(mymap);

