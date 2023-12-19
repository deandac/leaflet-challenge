# leaflet-challenge
# Earthquake Visualization with Leaflet

# This project focuses on visualizing significant earthquakes from the past week using Leaflet.js and D3.js.

# Features:
# Basemap: Utilized the OpenTopoMap tile layer as the background map for the visualization.

# Data Retrieval: Fetched earthquake data in GeoJSON format from the USGS API. Specifically, we targeted the dataset containing significant earthquakes from the past week.

# Marker Visualization: Each earthquake from the dataset is represented on the map using circle markers. The size of the marker corresponds to the earthquake's magnitude, while the color indicates the depth of the earthquake.

# Interactive Popups: Implemented popups for each earthquake marker that display detailed information, including the magnitude, depth, and location of the earthquake.

# Legend: Included a legend on the map to provide context for the colors representing different depth ranges of earthquakes.

# Steps Involved:
# Created a basemap using Leaflet's tileLayer.
# Initialized the map object with specified options.
# Made an AJAX call to retrieve earthquake data.
# Defined styling functions for markers based on earthquake properties.
# Added the GeoJSON layer to the map, ensuring each earthquake is represented visually.
# Implemented a legend control to provide a key for the visualization.
# By following this approach, we successfully visualized significant earthquakes, providing a clear and interactive representation for users to explore.