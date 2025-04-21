import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FileUpload() {
  const [files, setFiles] = useState([]); // State to store the list of uploaded files
  const [error, setError] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  
  const navigate = useNavigate(); // Hook for navigating between pages

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Check for file size or file type validations
      if (selectedFile.size > 1000000) { // Example: limit file size to 1MB
        setError("File size should be less than 1MB");
        return;
      }
      setError(null);
      
      // Generate preview URL for images, videos, etc.
      const previewUrl = URL.createObjectURL(selectedFile);
      
      // Add the new file to the existing files array
      setFiles((prevFiles) => [...prevFiles, { file: selectedFile, previewUrl }]);
    }
  };

  const handleUpload = () => {
    if (files.length === 0) {
      setError("Please select a file first!");
      return;
    }
    
    // Example: Simulate successful upload for all files
    setTimeout(() => {
      setError(null);
      alert("Files uploaded successfully!");
    }, 2000);
  };

  const handleBack = () => {
    navigate("/home"); // Navigate to the home page when the back button is clicked
  };

  return (
    <div className="file-upload-container">
      <h2>Upload File</h2>
      <input type="file" onChange={handleFileChange} />
      
      {files.length > 0 && (
        <div>
          <h3>Uploaded Files:</h3>
          {files.map((fileData, index) => (
            <div key={index} className="uploaded-file">
              <p>File Name: {fileData.file.name}</p>
              <p>File Size: {Math.round(fileData.file.size / 1024)} KB</p>
              
              {fileData.file.type.startsWith("image") && (
                <img src={fileData.previewUrl} alt="File Preview" width="200" />
              )}
              {fileData.file.type.startsWith("video") && (
                <video src={fileData.previewUrl} controls width="200"></video>
              )}
              {fileData.file.type.startsWith("audio") && (
                <audio src={fileData.previewUrl} controls></audio>
              )}
            </div>
          ))}
        </div>
      )}
      
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleUpload}>Upload</button>

      <div className="back-home-btn-container">
        <button onClick={handleBack} className="back-home-btn">
          ⬅️ Back to Home
        </button>
      </div>
    </div>
  );
}

export default FileUpload;
