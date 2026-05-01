import React, { useState } from 'react';
import './GovernmentPolicies.css';

const policies = [
  {
    title: "PM-KISAN Scheme",
    description: "Provides ₹6,000 per year to small and marginal farmers, directly into their bank accounts.",
    image: require('../assets/pm-kisan copy.jpg'), // Place your image in src/assets/
  },
  {
    title: "Soil Health Card Scheme",
    description: "Promotes soil testing and educates farmers on balanced fertilizer use for improved productivity.",
    image: require('../assets/Soil-Health-Cards.webp'),
  },
  {
    title: "Pradhan Mantri Fasal Bima Yojana",
    description: "Offers affordable crop insurance and financial support in case of crop failure due to natural disasters.",
    image: require('../assets/fasal.png'),
  },
  {
    title: "E-NAM Platform",
    description: "Digital marketplace for farmers to sell produce directly to buyers, ensuring fair pricing and transparency.",
    image: require('../assets/e-nam.jfif'),
  },
];
function GovernmentPolicies() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="policy-fullscreen">
      <h2>📜 Government Policies for Farmers</h2>
      <div className="policy-gallery">
        {policies.map((policy, idx) => (
          <div
            key={idx}
            className={`policy-thumb${selected === idx ? ' active' : ''}`}
            onClick={() => setSelected(idx)}
            tabIndex={0}
            role="button"
          >
            <img src={policy.image} alt={policy.title} />
            <span>{policy.title}</span>
          </div>
        ))}
      </div>
      {selected !== null && (
        <div className="policy-details">
          <h3>{policies[selected].title}</h3>
          <p>{policies[selected].description}</p>
        </div>
      )}
    </div>
  );
}

export default GovernmentPolicies;