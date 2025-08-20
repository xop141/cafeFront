"use client";
import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const Page = () => {
  const mapRef = useRef(null); 

  const moveTo = () => {
    if (!mapRef.current) return;
    mapRef.current.flyTo({
      center: [106.937972, 47.905083],
      zoom: 18,
      speed: 1.2,
    });
  };

  useEffect(() => {
    const map = new maplibregl.Map({
      container: "map",
      style: `https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_MAP}`,
      center: [106.9057, 47.8864],
      zoom: 12,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    mapRef.current = map; 


    new maplibregl.Marker()
      .setLngLat([106.937972, 47.905083])
      
      .addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div id="map" className="w-full h-full" />
      <button
        onClick={moveTo}
        className="absolute top-5 left-5 bg-blue-500 text-white px-4 py-2 rounded z-10"
      >
        Click to Move
      </button>
    </div>
  );
};

export default Page;
