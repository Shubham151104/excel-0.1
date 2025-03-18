"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Fix the default icon issue in Leaflet
const fixLeafletIcon = () => {
  delete (L.Icon.Default.prototype as any)._getIconUrl

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  })
}

export default function LeafletMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      // Fix the icon issue
      fixLeafletIcon()

      // Create the map
      const map = L.map(mapRef.current).setView([18.686950, 73.791243], 13) // [latitude, longitude], zoom level

      // Add the OpenStreetMap tiles
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      // Add a marker for the company location
      L.marker([18.686950, 73.791243])
        .addTo(map)
        .bindPopup("M/s Excel Engineers<br>Gat No. 79, Bhalekar Chowk, Jyotiba Nagar, Talwade, Pune, Maharashtra 412114")
        .openPopup()

      // Store the map instance for cleanup
      mapInstanceRef.current = map

      // Ensure the map renders correctly by triggering a resize after it's visible
      setTimeout(() => {
        map.invalidateSize()
      }, 100)
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
    }
  }, [])

  return <div ref={mapRef} className="h-48 rounded-lg" />
}

