let BaseURL = 'https://services.arcgis.com/S9th0jAJ7bqgIRjw/arcgis/rest/services/MCI_2014_to_2018/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json';


var myMap = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 13
 });
 
 L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: 
 }).addTo(myMap);
 
 var url = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=10000";
 
 d3.json(url, function(response) {
 
  console.log(response);
 
  var heatArray = [];
 
  for (var i = 0; i < response.length; i++) {
    var location = response[i].location;
 
    if (location) {
      heatArray.push([location.coordinates[1], location.coordinates[0]]);
    }
  }
 
  var heat = L.heatLayer(heatArray, {
    radius: 20,
    blur: 35
  }).addTo(myMap);
 
 });