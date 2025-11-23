import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./liveLocationMap.css";

// Fix default Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function LiveLocationMap() {
  const [position, setPosition] = useState([12.9716, 77.5946]); // default: Bengaluru
  const [hasLocation, setHasLocation] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
          setHasLocation(true);
        },
        (err) => {
          console.warn("Location access denied:", err);
          alert("Please allow location access to view live position.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  // 🔗 Share location function
  const handleShareLocation = () => {
    const [lat, lng] = position;
    const mapLink = `https://www.google.com/maps?q=${lat},${lng}`;
    if (navigator.share) {
      navigator.share({
        title: "My Current Location",
        text: "Here's my live location:",
        url: mapLink,
      });
    } else {
      navigator.clipboard.writeText(mapLink);
      alert("Location link copied to clipboard:\n" + mapLink);
    }
  };

  // 📍 Open directions in Google Maps
  const handleGetDirections = () => {
    const [lat, lng] = position;
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
      "_blank"
    );
  };

  return (
    <section className="live-map-section">
      <div className="map-wrapper">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "400px", width: "100%", borderRadius: "10px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {hasLocation && (
            <Marker position={position}>
              <Popup>
                <strong>You are here 👋</strong>
                <br />
                <button onClick={handleShareLocation} className="map-btn">
                  📤 Share Location
                </button>
                <br />
                <button onClick={handleGetDirections} className="map-btn">
                  🧭 Get Directions
                </button>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>

      {/* External buttons below map */}
      {hasLocation && (
        <div className="map-actions">
          <button onClick={handleShareLocation} className="map-btn">
            📤 Share My Location
          </button>
          <button onClick={handleGetDirections} className="map-btn">
            🧭 Show Directions in Google Maps
          </button>
        </div>
      )}
    </section>
  );
}

export default LiveLocationMap;
