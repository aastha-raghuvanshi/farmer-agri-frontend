import React from 'react';
import './Navbar.css';
import { MdHome, MdStore, MdCloud, MdAgriculture, MdLocalHospital, MdPolicy } from 'react-icons/md';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home"><MdHome style={{verticalAlign: 'middle', marginRight: 6}} />Home</a></li>
        <li><a href="#market"><MdStore style={{verticalAlign: 'middle', marginRight: 6}} />Market Rates</a></li>
        <li><a href="#weather"><MdCloud style={{verticalAlign: 'middle', marginRight: 6}} />Weather</a></li>
        <li><a href="#crops"><MdAgriculture style={{verticalAlign: 'middle', marginRight: 6}} />Crops</a></li>
        <li><a href="#disease-predictor"><MdLocalHospital style={{verticalAlign: 'middle', marginRight: 6}} />Disease Predictor</a></li>
        <li><a href="#policies"><MdPolicy style={{verticalAlign: 'middle', marginRight: 6}} />Policies</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;