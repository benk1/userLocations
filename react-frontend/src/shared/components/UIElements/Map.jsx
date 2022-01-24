import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import './Map.css';

const Map = (props) => {
	const { center, zoom } = props;
	const mapRef = useRef();
	useEffect(() => {
		mapboxgl.accessToken =
			'pk.eyJ1IjoiYmVuLTRtYXRoaWFzIiwiYSI6ImNreXN0Ym9zZDE3OTAycm1tM2FiOHd3a3cifQ.axAnMXTZdmYe1rqCRcDjgw';

		const map = new mapboxgl.Map({
			container: mapRef.current,
			style: 'mapbox://styles/mapbox/streets-v11',
			center: center,
			zoom: zoom,
		});
		new mapboxgl.Marker({ position: center, map: map });
	}, [center, zoom]);
	return (
		<div
			ref={mapRef}
			className={`map ${props.className}`}
			style={props.style}
		></div>
	);
};

export default Map;
