import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import "../GlobalStyles.css";
import API from "../utils/API";
import RecipeCard from "../components/RecipeCard";

function Dashboard() {
  const [recipeOfWeek, setRecipeOfWeek] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);
  const [authorName, setAuthorName] = useState();

  const getRatingROW = (id) => {
    API.getRating(id)
      .then((res) => {
        setRecipeOfWeek((recipeOfWeek) => ({...recipeOfWeek, rating: res.data[0].avgRating}));
      })
      .catch(err => console.log(err));
  };

  const getAuthor = (id) => {
    API.getUserInfo(id)
      .then((res) => {
        setAuthorName(res.data.firstName + " " +res.data.lastName);
      })
      .catch(err => console.log(err));
  };

  const loadROW = () => {
    API.getROW()
      .then((res) => {
        getRatingROW(res.data[0]._id);
        API.findRecipe(res.data[0]._id)
          .then((res) => {
            getAuthor(res.data.authorId);
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
        <div className="col">
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
                  <p className="m-2"><strong>Author:</strong> {authorName}</p>
                  <p className="m-2"><strong>Type:</strong> {recipeOfWeek.type}</p>
                  <img src={recipeOfWeek.image} alt={recipeOfWeek.title}/>
                  <div className="row">
                    <div className="col m-2"><h5><strong>Category:</strong></h5>
                      <div>
                        {recipeOfWeek.categories && recipeOfWeek.categories.map((category) => (
                          <li className="m-2" key="category">{category}</li>
                        ))}
                      </div>
                    </div>
                    <div className="col m-2">
                      <h5><strong>Ingredients:</strong></h5>
                      <div>
                        {recipeOfWeek.ingredients && recipeOfWeek.ingredients.map((ingredient) => (
                          <li className="m-2" key={ingredient}>{ingredient}</li>
                        ))}
                      </div>
                    </div>
                  </div>
                  <h5 className="m-2"><strong>Prep:</strong></h5>
                  <p className="m-2">{recipeOfWeek.prep}</p>
                </div>
              </div>
              <div className="col shadow p-3 m-3 rounded list-border recipe-list">
                <h2 className="text-center"><strong>My Recipes</strong></h2>
                {userRecipes && userRecipes.map((recipe) => (
                  <RecipeCard key={recipe._id} _id={recipe._id} title={recipe.title} prep={recipe.prep} ingredients={recipe.ingredients} categories={recipe.categories}/>
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