import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "../GlobalStyles.css";
import UserContext from "../components/Context/UserContext";
import API from "../utils/API";
import RecipeCard from "../components/RecipeCard";

function Dashboard() {
  const { email } = useContext(UserContext);
  const [recipeOfWeek, setRecipeOfWeek] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);

  const getRatingROW = (id) => {
    API.getRating(id)
      .then((res) => {
        console.log(res.data[0].avgRating);
        setRecipeOfWeek((recipeOfWeek) => ({...recipeOfWeek, rating: res.data[0].avgRating}));
      })
      .catch(err => console.log(err));
  };

  const loadROW = () => {
    API.getROW()
      .then((res) => {
        console.log(res.data[0]._id);
        getRatingROW(res.data[0]._id);
        API.findRecipe(res.data[0]._id)
          .then((res) => {
            console.log(res.data);
            setRecipeOfWeek((recipeOfWeek) => ({...res.data, rating: recipeOfWeek.rating}));
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  const getRecipes = () => {
    API.getUserInfo()
      .then((res) => {
        setRecipeOfWeek((recipeOfWeek) => ({...recipeOfWeek, author: res.data.firstName + " " + res.data.lastName}));
        API.getUserRecipes(res.data._id)
          .then((res) => {
            console.log(res);
            setUserRecipes(res.data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadROW();
    getRecipes();
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
                  <h4>{recipeOfWeek.title}<span className="float-right">{recipeOfWeek.rating && recipeOfWeek.rating}/5 stars</span></h4>
                  <img src={recipeOfWeek.image} alt={recipeOfWeek.title}/>
                  <h5>Category:</h5>
                  <div>
                    <ul>
                      {recipeOfWeek.categories && recipeOfWeek.categories.map((category) => (
                        <li key={category}>{category}</li>
                      ))}
                    </ul>
                  </div>
                  <h5>Type:</h5>
                  <p>{recipeOfWeek.type}</p>
                  <h5>Ingredients:</h5>
                  <div>
                    <ul>
                      {recipeOfWeek.ingredients && recipeOfWeek.ingredients.map((ingredient) => (
                        <li key={ingredient}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <h5>Prep:</h5>
                  <p>{recipeOfWeek.prep}</p>
                </div>
              </div>
              <div className="col shadow p-3 m-3 rounded list-border">
                <h2>My Recipes</h2>
                {userRecipes && userRecipes.map((recipe) => (
                  <RecipeCard key={recipe}
                    recipes={recipe}/>
                ))}
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