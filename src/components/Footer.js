import React from 'react';
import './Footer.css';
import { MdAgriculture } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="app-footer">
      <div style={{ marginBottom: '0.5rem', fontSize: '1.7rem' }}>
        <MdAgriculture style={{ color: '#43cea2', marginRight: 12, verticalAlign: 'middle' }} />
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#333', marginRight: 12 }}>
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1976d2', marginRight: 12 }}>
          <FaLinkedin />
        </a>
      </div>
      <p>
        © {new Date().getFullYear()} KrishiBuddy. All rights reserved.<br />
        Made with <span style={{ color: '#43cea2', fontWeight: 700 }}>🌱</span> for Indian Farmers.
        <br></br>
        <span style={{ color: '#1976d2', fontWeight: 600 }}>Created by Aastha Raghuvanshi</span>
      </p>
    </footer>
  );
}

export default Footer;