import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header";
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
        console.log(res.data);
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
        <div className="col-10">
          <div className="container">
            <div className="row shadow p-3 m-3 rounded list-border page-header">
              <div className="col text-center">
                <h1 className="text-center"><strong>Dashboard</strong></h1>
              </div>
            </div>
            <div className="row ">
              <div className="col shadow p-3 m-3 rounded list-border recipe-list">
                <div className="container">
                  <h2 className="text-center"><strong>Smoothie of the Week</strong></h2>
                  <h4>{recipeOfWeek.title}<span className="float-right">{recipeOfWeek.rating && recipeOfWeek.rating}/5 stars</span></h4>
                  <p>Author:</p>
                  <img src={recipeOfWeek.image} alt={recipeOfWeek.title}/>
                  <h5>Category:</h5>
                  <div>
                    {recipeOfWeek.categories && recipeOfWeek.categories.map((category) => (
                      <p>{category}</p>
                    ))}
                  </div>
                  <h5>Type:</h5>
                  <p>{recipeOfWeek.type}</p>
                  <h5>Ingredients:</h5>
                  <div>
                    {recipeOfWeek.ingredients && recipeOfWeek.ingredients.map((ingredient) => (
                      <p>{ingredient}</p>
                    ))}
                  </div>
                  <h5>Prep:</h5>
                  <p>{recipeOfWeek.prep}</p>
                </div>
              </div>
              <div className="col shadow p-3 m-3 rounded list-border recipe-list">
                <h2 className="text-center"><strong>My Recipes</strong></h2>
                {userRecipes && userRecipes.map((recipe) => (
                  <RecipeCard recipes={recipe} key={recipe._id}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
