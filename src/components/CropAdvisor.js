// 
import React, { useState } from "react";

const CropDetailModal = ({ crop, onClose }) => {
  if (!crop) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{crop.crop_name}</h2>
        {crop.image && (
          <img
            src={crop.image}
            alt={crop.crop_name}
            className="modal-crop-img"
            style={{
              background: "linear-gradient(135deg, #e0f7fa 60%, #c8e6c9 100%)",
              borderRadius: 12,
              boxShadow: "0 2px 8px #b2dfdb",
              marginBottom: 16,
              width: "100%",
              maxWidth: 260,
              minHeight: 160,
              maxHeight: 220,
              objectFit: "cover",
              padding: 10,
              display: "block"
            }}
          />
        )}
        <p><strong>Season:</strong> {crop.best_season}</p>
        <p><strong>Soil:</strong> {crop.soil}</p>
        <p><strong>Growth Duration:</strong> {crop.growth_duration}</p>
        <p><strong>Planting Tips:</strong> {crop.planting_tips || "N/A"}</p>
        <p><strong>Pest Control:</strong> {crop.pest_control || "N/A"}</p>
        <p><strong>Harvest Time:</strong> {crop.harvest_time || "N/A"}</p>
      </div>
    </div>
  );
};

const CropAdvisor = () => {
  const [region, setRegion] = useState("North");
  const [soil, setSoil] = useState("Loamy");
  const [season, setSeason] = useState("Winter");
  const [crops, setCrops] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCrop, setSelectedCrop] = useState(null);

  const fetchCrops = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://127.0.0.1:5000/api/get_crop_info?region=${region}&soil=${soil}&season=${season}`
      );
      const data = await res.json();
      setCrops(data);
    } catch (error) {
      console.error("Error fetching crops:", error);
      setCrops([{ message: "❌ Failed to fetch crop data. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg">
      <h2>🌱 Crop Recommendation</h2>
       
      <div className="selectors">
        <label>
          Region:
          <select value={region} onChange={(e) => setRegion(e.target.value)}>
            <option value="North">North</option>
            <option value="East">East</option>
            <option value="West">West</option>
          </select>
        </label>

        <label>
          Soil:
          <select value={soil} onChange={(e) => setSoil(e.target.value)}>
            <option value="Loamy">Loamy</option>
            <option value="Clay">Clay</option>
            <option value="Sandy">Sandy</option>
          </select>
        </label>

        <label>
          Season:
          <select value={season} onChange={(e) => setSeason(e.target.value)}>
            <option value="Winter">Winter</option>
            <option value="Summer">Summer</option>
            <option value="Monsoon">Monsoon</option>
          </select>
        </label>

        <button onClick={fetchCrops} disabled={loading}>
          {loading ? "Fetching..." : "Get Recommendations"}
        </button>
      </div>

      <div className="crop-list">
        {crops.map((crop, idx) => (
          <div
            className="crop-card"
            key={idx}
            onClick={() => crop.crop_name && setSelectedCrop(crop)}
            style={{ cursor: crop.crop_name ? "pointer" : "default" }}
          >
            {crop.crop_name ? (
              <>
                {/* Show image if available */}
                {crop.image && (
                  <img
                    src={crop.image}
                    alt={crop.crop_name}
                    className="crop-img"
                  />
                )}
                <h3>{crop.crop_name}</h3>
                <p><strong>Season:</strong> {crop.best_season}</p>
                <p><strong>Soil:</strong> {crop.soil}</p>
                <p><strong>Duration:</strong> {crop.growth_duration}</p>
              </>
            ) : (
              <p className="crop-message"><em>{crop.message}</em></p>
            )}
          </div>
        ))}
      </div>

      {/* Modal for detailed crop info */}
      <CropDetailModal crop={selectedCrop} onClose={() => setSelectedCrop(null)} />
    </div>
  );
};

export default CropAdvisor;