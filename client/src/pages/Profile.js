import React, { useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./profile.css";
import API from "../utils/API";

function Profile() {
    const [image, setImage] = useState("images/fruitTray.jpg");
    const handleChange = (e) => {
      // can do multiple files, so will give back an Array, we want to grab back the first, pass it through to API upload
      uploadImage(e.target.files[0]);
    }; 

    //UseEffect
    useEffect(() => {
        API.getUserInfo().then(res => {
            console.log(res);
            setImage(res.data.image);
        }).catch(err =>
            console.log(err));
    }, []);
  
    const uploadImage = async (file) => {
      const { data: image } = await API.userImageUpload(file);
      setImage(image);
    };


    return (
        <>
            <Header />

            <div className="row">
                <Nav />
                <div className="col-9">
                    <div className="container">
                        <div className="row shadow p-3 m-3 rounded list-border">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <h3>User Profile</h3>
                                        <div className="row">
                                            <div className="col-5 ">
                                                <img className="smoothie rounded list-border" src={image} secure="false" width="300" crop="scale" ></img>
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
                                            <div className="col-7 p-3">
                                                <div>
                                                    <h5>Username: User's username here</h5>
                                                </div>
                                                <div>
                                                    <h5>First Name: User's first name</h5>
                                                </div>
                                                <div>
                                                    <h5>Last Name: User's last name</h5>
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

    )



}
export default Profile