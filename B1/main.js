// Tạo bản đồ và đặt vị trí trung tâm
var mymap = L.map('map').setView([10.0348833, 105.7516965], 12);

// Thêm tile layer từ OpenStreetMap
var oms = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

// Thêm tile layer từ Mapbox
var mapbox = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox://styles/khanhnhat188/cltr81x2800d901pjavlg7uer', // ID của style Mapbox bạn muốn sử dụng
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2hhbmhuaGF0MTg4IiwiYSI6ImNrcjNqMWxyNzIwNG0yb3F1NjNhcGhheDEifQ.fhWAK0Zr94gpqbU8ySZNmA'
}).addTo(mymap);

// Thêm control layers để chuyển đổi giữa các lớp tile
var baseLayers = {
    "OpenStreetMap": oms,
    "Mapbox": mapbox
};


// Thêm control layers vào bản đồ
L.control.layers(baseLayers).addTo(mymap);
