import React from "react";
import "./style.css";


function Jumbotron() {

  return (
        <>
            <div className="jumbotron jumbotron-fluid">
              <div className="container-jumbo">
                <h1 className="display-2" style={{fontSize:"5vw"}}>Juicy Smoothie</h1>
                <p className="lead" style={{fontSize:"2vw"}}><strong>Healthy smoothies at your fingertips!</strong></p>

              </div>
            </div>
        </>

  );



}
export default Jumbotron;