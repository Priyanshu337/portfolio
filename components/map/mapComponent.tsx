import mapboxgl from "mapbox-gl";
import React, { useEffect, useRef } from "react";
import { MapProps } from "@/types/map"



export default function Map((MapProps: any) => {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map>(null);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            center: [lng, lat],
            zoom: zoom,
            pitch: pitch,
        });
    }, [lng, lat, zoom, pitch]: MapProps);

    return <div ref={mapContainer} />;
}