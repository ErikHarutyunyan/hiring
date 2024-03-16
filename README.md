# Frontend React Assignment

## Overview

Create a simplified version of our Driver Web App (DWA). This app assists a delivery driver in managing and completing parcel deliveries to various addresses.

### Stops List

Please refer to the `stops_list.json` file provided in this project to import the list of delivery stops. This file contains all necessary details for each stop, including sequence, estimated time of arrival (ETA), time window, street address, zipcode, city, and coordinates.

### Navigation Feature

On clicking the 'Navigate' icon, Google Maps will open in a new window to guide the driver from their current location to the delivery address.

### Completion Transition

On clicking the 'Complete' button, please mimic the ticket transition displayed on the second screen of the design.

### Map View

Show all delivery locations with markers on a map and connect the markers with straight lines in sequence.

- **Interactive Map:** use MapLibre GL JS for map interaction (markers, lines), details can be found [here](https://maplibre.org/).
- **Tiles:** Use [this URL](https://tiles.stadiamaps.com/styles/osm_bright.json) as the style URL in MapLibre GL JS.

### Marker Transition

Change the marker's color on the map once a delivery is marked as "Completed".