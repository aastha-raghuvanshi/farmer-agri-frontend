import React, { useState } from 'react';

function DiseasePredictor() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult('');
  };

  const handlePredict = async () => {
    if (!image) return;
    // Placeholder: Replace with your backend API call
    setResult('Prediction: (This is a demo. Connect to your ML backend for real results.)');
  };

  return (
    <div className="card" id="disease-predictor">
      <h2>🌿 Disease Predictor</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && (
        <div style={{ margin: '1rem 0' }}>
          <img src={preview} alt="Preview" style={{ maxWidth: 200, borderRadius: 12, boxShadow: '0 2px 8px #ccc' }} />
        </div>
      )}
      <button onClick={handlePredict} disabled={!image}>Predict Disease</button>
      {result && <div style={{ marginTop: '1rem', color: '#1976d2', fontWeight: 600 }}>{result}</div>}
    </div>
  );
}

export default DiseasePredictor;