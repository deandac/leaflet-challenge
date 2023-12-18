// store api as queryurl
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

// Perform a GET request to the query URL.
d3.json(queryUrl).then(function(data) {
	// Send the data.features object to the createFeatures function.
	createFeatures(data.features);
});

// Define the createFeatures function first
function createFeatures(features)



// create tile for for map background
console.log("Step 1 working");

// create tile layer for background map
let basemap = L.tileLayer(
    "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'",
    {
      attribution:
        'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    });

    
    let map = L.map("map", {
        center: [40.7, -94.5], 
        zoom: 3
    });
    
      