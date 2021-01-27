import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../GlobalStyles.css";
import API from "../utils/API";

function Profile() {
  const [userData, setUserData] = useState({});

  //UseEffect
  useEffect(() => {
    API.getUserInfo().then(res => {
      console.log(res);
      setUserData(res.data);
    }).catch(err => console.log(err));
  }, []);

  const uploadImage = async (file) => {
    const { data: image } = await API.userImageUpload(file);
    setUserData((userData) => ({...userData, image: image}));
  };

  const handleChange = (e) => {
    // can do multiple files, so will give back an Array, we want to grab back the first, pass it through to API upload
    uploadImage(e.target.files[0]);
  };

  return (
    <>
      <Header />
      <div className="row">
        <div className="col">
          <div className="container">
            <div className="row shadow p-3 m-3 rounded list-border page-header">
              <div className="col">
                <div className="row">
                  <div className="col">
                    <h3><strong>User Profile</strong></h3>
                    <div className="row">
                      <div className="col-5 justify-content-center">
                        <img className="smoothie rounded list-border m-3" src={userData.image} alt={userData.firstName} secure="false" width="300" crop="scale" ></img>
                        <label className="file-label">
                          {/* Input with type of file, allows to grab file from computer and upload */}
                          {/* handle change whenever file has been added or uploaded */}
                          {/* takes e.target.file @ position 0 */}
                          <input
                            className="file-input m-2"
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
                      <div className="col-7 p-3 justify-content-center">
                        <div>
                          <h5><strong>Email</strong>: {userData.email}</h5>
                        </div>
                        <div>
                          <h5><strong>First Name:</strong> {userData.firstName}</h5>
                        </div>
                        <div>
                          <h5><strong>Last Name:</strong> {userData.lastName}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;