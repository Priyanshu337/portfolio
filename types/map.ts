export interface MapProps {
    lng: number;
    lat: number;
    zoom?: number;
    pitch?: number;
}

export interface MapRef {
    current: mapboxgl.Map | null;
}

export interface MapContainerRef {
    current: HTMLDivElement | null;
}

export declare function Map(props: MapProps): JSX.Element;