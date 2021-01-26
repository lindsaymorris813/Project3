import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../GlobalStyles.css";
import UserContext from "../components/Context/UserContext";
import API from "../utils/API";

function Dashboard() {
  const { email } = useContext(UserContext);
  const [recipeOfWeek, setRecipeOfWeek] = useState([]);

  // const loadROW = () => {
  //   API.getROW()
  //     .then((res) => {
  //       API.findRecipe(res.data[0]._id)
  //         .then((res) => {
  //           setRecipeOfWeek(res.data);
  //           console.log(res.data);
  //         })
  //         .catch(err => console.log(err));
  //     })
  //     .catch(err => console.log(err));
  // };

  // useEffect(() => {
  //   loadROW();
  // });

  return (
    <>
      <Header />
      <div className="row">
        <Nav />
        <div className="col-10">
          <div className="container">
            <div className="row shadow p-3 m-3 rounded list-border page-header">
              <div className="col text-center">
                <h1 className="text-center">Dashboard</h1>
              </div>
            </div>
            <div className="row ">
              <div className="col shadow p-3 m-3 rounded list-border recipe-list">
                <div className="container">
                  <h2 className="text-center">Smoothie of the Week</h2>
                </div>
              </div>
              <div className="col shadow p-3 m-3 rounded list-border recipe-list">
                <h2 className="text-center">My Recipes</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;