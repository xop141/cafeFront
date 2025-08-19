"use client"
import React, { useEffect } from 'react'
import { Loader } from '@googlemaps/js-api-loader'
import dotenv from 'dotenv'

const Page = () => {

  
  const apiKey = process.env.NEXT_PUBLIC_MAP
  console.log(apiKey);
  

  useEffect(() => {
    const initMap = async () => {
      if (!apiKey) {
        console.error("Google Maps API key is missing!")
        return
      }

      const loader = new Loader({
        apiKey,
        version: "quarterly",
        libraries: ["places"],
      })

      const google = await loader.load()

  
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 12,
      })
    }

    initMap()
  }, [apiKey])

  return (
    <div className="w-full h-screen">
      <div id="map" className="w-full h-full"></div>
    </div>
  )
}

export default Page
