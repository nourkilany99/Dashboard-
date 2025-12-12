import React, { useRef } from 'react';
import './ImageEditor.css';
import { FiEdit2 } from 'react-icons/fi';

const ImageEditor = ({ 
  imageUrl, 
  onChange,
  title = "Hero image",          // default text
  subtitle = "Change hero image" // default text
}) => {

  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && onChange) onChange(file);
  };

  return (
    <div className="hero-editor" onClick={() => fileInputRef.current.click()}>
      
      {/* Background image */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Center content */}
      <div className="hero-content">
        <h3>{title}</h3>
        <FiEdit2 className="edit-icon" />
        <p>{subtitle}</p>
      </div>

      {/* Hidden file input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ImageEditor;
