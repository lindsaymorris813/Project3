import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./dashboard.css";
import UserContext from "../components/Context/UserContext";
import API from "../utils/API";

function Dashboard() {
  const { email } = useContext(UserContext);
  const [recipeOfWeek, setRecipeOfWeek] = useState([]);

  async function loadROW() {
    await API.getROW()
      .then(res => setRecipeOfWeek(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    loadROW();
  });

  return (
    <>
      <Header />
      <div className="row">
        <Nav />
        <div className="col-9">
          <div className="container">
            <div className="row shadow p-3 m-3 rounded list-border">
              <div className="col-3">
                <img className="smoothie" src="images/fruitTray.jpg" ></img>
              </div>
              <div className="col-9">
                <h3>Dashboard heading. What else here?</h3>
              </div>
            </div>
            <div className="row ">
              <div className="col shadow p-3 m-3 rounded list-border">
                <div className="container">
                  <h2>Smoothie of the Week</h2>
                </div>
              </div>
              <div className="col shadow p-3 m-3 rounded list-border">
                My Recipes
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;