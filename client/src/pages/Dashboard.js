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

  const loadROW = () => {
    API.getROW()
      .then((res) => {
        console.log(res.data[0]._id);
        API.findRecipe(res.data[0]._id)
          .then((res) => {
            console.log(res.data);
            setRecipeOfWeek(res.data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  // const getRatingROW = () => {
  //   API.getRating()
  //     .then((res) => {
  //       console.log(res.data.avgRating);
  //       setRecipeOfWeek((recipeOfWeek) => ({...recipeOfWeek, rating: res.data.avgRating}));
  //       console.log(recipeOfWeek);
  //     })
  //     .catch(err => console.log(err));
  // };

  useEffect(() => {
    loadROW();
    // getRatingROW();
  }, []);

  return (
    <>
      <Header />
      <div className="row">
        <Nav />
        <div className="col-9">
          <div className="container">
            <div className="row shadow p-3 m-3 rounded list-border">
              <div className="col-3">
                <img className="smoothie" src="images/fruitTray.jpg" alt="" ></img>
              </div>
              <div className="col-9">
                <h3>Dashboard heading. What else here?</h3>
              </div>
            </div>
            <div className="row ">
              <div className="col shadow p-3 m-3 rounded list-border">
                <div className="container">
                  <h2>Smoothie of the Week</h2>
                  <h4>{recipeOfWeek.title}<span className="float-right">{recipeOfWeek.rating}/5 stars</span></h4>
                  <p>Author:</p>
                  <img src={recipeOfWeek.image} alt={recipeOfWeek.title}/>
                  <h5>Category:</h5>
                  {/* {recipeOfWeek.categories.map((category) => {
                    <p>{category}</p>
                  })} */}
                  <h5>Type:</h5>
                  <p>{recipeOfWeek.type}</p>
                  <h5>Ingredients:</h5>
                  <p>{recipeOfWeek.ingredients}</p>
                  <h5>Prep:</h5>
                  <p>{recipeOfWeek.prep}</p>
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