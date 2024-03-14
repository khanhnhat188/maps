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
    id: 'khanhnhat188/cltr0kd2m000o01qw6c6rezxs', // ID của style Mapbox bạn muốn sử dụng
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2hhbmhuaGF0MTg4IiwiYSI6ImNrcjNqMWxyNzIwNG0yb3F1NjNhcGhheDEifQ.fhWAK0Zr94gpqbU8ySZNmA'
}).addTo(mymap);

// Thêm control layers để chuyển đổi giữa các lớp tile
var baseLayers = {
    "OpenStreetMap": oms,
    "Mapbox": mapbox
};

// Sự kiện thay đổi cho input file
document.getElementById('fileInput').addEventListener('change', function (e) {
    var file = e.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var kmlData = e.target.result;
            // Thêm tệp KML vào bản đồ
            L.KML.parse(kmlData).addTo(mymap);
        };
        reader.readAsText(file);
    }
});

// Sự kiện click cho nút thêm KML
document.getElementById('addKMLButton').addEventListener('click', function () {
    // Mở input file khi nút được click
    document.getElementById('fileInput').click();
});

// Thêm control layers vào bản đồ
L.control.layers(baseLayers).addTo(mymap);
