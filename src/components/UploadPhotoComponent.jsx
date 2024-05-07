import React, { useState } from 'react';

const UploadPhotoComponent = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    console.log('Uploading files:', selectedFiles);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileInputChange} />
      <button onClick={(e)=>handleUpload(e)}>Upload</button>
      <div>
        {selectedFiles.map((file, index) => (
          <div key={index}>
            <img src={URL.createObjectURL(file)} alt={`Uploaded ${index}`} width="200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadPhotoComponent;