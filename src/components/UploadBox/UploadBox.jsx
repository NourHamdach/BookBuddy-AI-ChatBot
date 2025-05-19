import React, { useRef, useState } from 'react';
import './UploadBox.css';
import uploadImage from './upload-icon.png';

export default function UploadBox({ onFileSelect }) {
  const fileInputRef = useRef();
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && onFileSelect) {
      onFileSelect(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type === "application/pdf" && onFileSelect) {
      onFileSelect(file);
    }
  };

  return (
    <div className="upload-box">
      <div
        className={`upload-inner ${isDragging ? 'dragging' : ''}`}
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <img src={uploadImage} alt="Upload" />
        <p>Click to upload, or drag PDF here</p>
        <input
          type="file"
          accept="application/pdf"
          ref={fileInputRef}
          onChange={handleFileChange}
          hidden
        />
      </div>
      <button className="upload-btn" onClick={handleClick}>Upload PDF</button>
    </div>
  );
}
