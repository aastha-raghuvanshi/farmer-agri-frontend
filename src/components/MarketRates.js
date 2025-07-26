// src/components/MarketRates.js

// src/components/MarketRates.js

import React, { useEffect, useState } from "react";
import { MdStore } from "react-icons/md";
const MarketRates = () => {
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarketRates = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/market-rates");
        if (!response.ok) throw new Error("Failed to fetch market rates");
        const data = await response.json();
        setMarketData(data);
        setError(null);
      } catch (err) {
        console.error("Error:", err);
        setError("Unable to load market data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMarketRates();
  }, []);

  return (
    <div className="market-rates-section">
      <h2>📈 Market Rates</h2>

      {loading && <p className="market-loading">Fetching latest rates...</p>}

      {error && <p className="market-error">{error}</p>}

    {/* {Array.isArray(marketData) && !error && marketData.map((item, idx) => (
  <div className="market-card" key={idx}>
    <MdStore style={{ color: "#ff9800", fontSize: "1.5rem", marginBottom: "-4px", marginRight: "8px" }} />
    <p><strong>Mandi:</strong> {item.mandi}</p>
    <p><strong>Crop:</strong> {item.crop}</p>
    <p><strong>Price:</strong> {item.price}</p>
  </div>
))} */}
{marketData && !error && (
  <div className="market-card">
    <MdStore style={{ color: "#ff9800", fontSize: "1.5rem", marginBottom: "-4px", marginRight: "8px" }} />
    <p><strong>Mandi:</strong> {marketData.mandi}</p>
    <p><strong>Crop:</strong> {marketData.crop}</p>
    <p><strong>Price:</strong> {marketData.price}</p>
  </div>
)}
    </div>
  );
};

export default MarketRates;

