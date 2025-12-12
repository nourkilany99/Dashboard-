import React from 'react';
import ImageEditor from './ImageEditor';
import './TripleImageEditor.css';

const TripleImageEditor = ({
  images = [],      // Array of 3 image URLs
  onChangeImage,    // Callback(index, file)
}) => {
  return (
    <div className="triple-editor-container">
      {images.map((img, index) => (
        <div className="triple-slot" key={index}>
          <ImageEditor
            imageUrl={img}
            title={`Mockup ${index + 1}`}
            subtitle="Change hero image"
            onChange={(file) => onChangeImage(index, file)}
          />
        </div>
      ))}
    </div>
  );
};

export default TripleImageEditor;
