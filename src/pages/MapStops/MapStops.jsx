import { selectStopsList } from "@/app/features/stops/stopsSlice";
import maplibregl from "maplibre-gl";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const MapStops = () => {
	const { stopsList } = useSelector(selectStopsList);
	let data = stopsList;
	const mapContainer = useRef(null);
	const map = useRef(null);
	const { state } = useLocation();
	let centerData = [null];
	centerData = state
		? [state.centerData.lng, state.centerData.lat]
		: [data[0].lng, data[0].lat];
	useEffect(() => {
		if (!map.current) {
			map.current = new maplibregl.Map({
				container: mapContainer.current,
				style: "https://tiles.stadiamaps.com/styles/osm_bright.json",
				center: centerData,
				zoom: 15,
			});

			map.current.on("load", () => {
				addMarkersAndLines();
			});
		}

		return () => map.current.remove();
	}, []);

	const addMarkersAndLines = () => {
		// Draw markers
		data.forEach(location => {
			const markerElement = document.createElement("div");
			markerElement.className = "marker";
			markerElement.setAttribute("data-completed", `${location.completed}`);
			markerElement.setAttribute("data-number", `${location.sequence_number}`);
			markerElement.innerHTML = `<svg class="customMarker" xmlns="http://www.w3.org/2000/svg" width="26" height="37" viewBox="0 0 26 37" fill="none">
			<mask id="path-1-inside-1_7744_719" fill="white">
			<path d="M13 0C5.81286 0 0 5.81286 0 13C0 20.7443 8.20857 31.4229 11.5886 35.49C12.3314 36.3814 13.6871 36.3814 14.43 35.49C17.7914 31.4229 26 20.7443 26 13C26 5.81286 20.1871 0 13 0Z"/>
			</mask>
			<path d="M13 0C5.81286 0 0 5.81286 0 13C0 20.7443 8.20857 31.4229 11.5886 35.49C12.3314 36.3814 13.6871 36.3814 14.43 35.49C17.7914 31.4229 26 20.7443 26 13C26 5.81286 20.1871 0 13 0Z" fill="#1329FE"/>
			<path d="M11.5886 35.49L10.8195 36.1291L10.8204 36.1302L11.5886 35.49ZM14.43 35.49L15.1982 36.1302L15.2008 36.1271L14.43 35.49ZM13 -1C5.26057 -1 -1 5.26057 -1 13H1C1 6.36514 6.36514 1 13 1V-1ZM-1 13C-1 17.1618 1.18047 21.9686 3.66811 26.1364C6.18019 30.3452 9.11353 34.0764 10.8195 36.1291L12.3577 34.8508C10.6836 32.8365 7.82267 29.1948 5.38546 25.1114C2.92382 20.9871 1 16.5825 1 13H-1ZM10.8204 36.1302C11.963 37.5014 14.0556 37.5014 15.1982 36.1302L13.6618 34.8498C13.3187 35.2615 12.6999 35.2615 12.3568 34.8498L10.8204 36.1302ZM15.2008 36.1271C16.8963 34.0756 19.8248 30.3447 22.3344 26.1361C24.8196 21.9685 27 17.1617 27 13H25C25 16.5826 23.0761 20.9872 20.6166 25.1118C18.1816 29.1953 15.3251 32.8373 13.6592 34.8529L15.2008 36.1271ZM27 13C27 5.26057 20.7394 -1 13 -1V1C19.6349 1 25 6.36514 25 13H27Z" fill="white" mask="url(#path-1-inside-1_7744_719)"/>
			<path d="M13 23C7.48 23 3 18.52 3 13C3 7.48 7.48 3 13 3C18.52 3 23 7.48 23 13C23 18.52 18.52 23 13 23Z" fill="white" class="circleNumber"/>
			</svg>`;
			new maplibregl.Marker({ element: markerElement })
				.setLngLat([location.lng, location.lat])
				.addTo(map.current);
		});

		// Draw lines
		data.forEach((location, index) => {
			if (index > 0) {
				const coordinates = [
					[data[index - 1].lng, data[index - 1].lat],
					[location.lng, location.lat],
				];

				map.current.addSource(`line-${index}`, {
					type: "geojson",
					data: {
						type: "Feature",
						properties: {},
						geometry: {
							type: "LineString",
							coordinates: coordinates,
						},
					},
				});

				map.current.addLayer({
					id: `line-${index}`,
					type: "line",
					source: `line-${index}`,
					layout: {
						"line-join": "round",
						"line-cap": "round",
					},
					paint: {
						"line-color": "#1329FE",
						"line-width": 2,
					},
				});
			}
		});
	};

	return <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />;
};

export default MapStops;
