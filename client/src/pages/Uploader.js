import React, { useState } from "react";
import API from "../utils/API";

function Uploader () {
  // grabs image you have saved in cloudinary image folder
  const [image, setImage] = useState("");
  const handleChange = (e) => {
    // can do multiple files, so will give back an Array, we want to grab back the first, pass it through to API upload
    uploadImage(e.target.files[0]);
  };

  const uploadImage = async (file) => {
    const { data: image } = await API.userImageUpload(file);
    setImage(image);
  };
  return (
    <div className="App">
      <header className="App-header">
        {/* //tell it the cloudName and grab public ID from state */}
        <img src={image} secure="false" alt={image} width="300" crop="scale" />
        <p>
          Upload an image example
        </p>
        <div className="file">
          <label className="file-label">
            {/* Input with type of file, allows to grab file from computer and upload */}
            {/* handle change whenever file has been added or uploaded */}
            {/* takes e.target.file @ position 0 */}
            <input
              className="file-input"
              type="file"
              onChange={handleChange}
            />
            {/* no easy way to change the look of file uploader
            max makes invisible and then puts an image OVER the uploader
            this is what anthony is doing here */}
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload"></i>
              </span>
              <span className="file-label">
              </span>
            </span>
          </label>
        </div>
      </header>
    </div>
  );
}
export default Uploader;