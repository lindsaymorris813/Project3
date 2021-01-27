import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";
import CreateModal from "../components/Modal";
import API from "../utils/API";

function AddRecipe() {
  const [userRecipes, setUserRecipes] = useState([]);

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
    getRecipes();
  }, []);

  return (
    <>
      <Header />
      <div className="row justify-content-center">
        <div className="col-9">
          <div className="container justify-content-center">
            <div className="row shadow p-3 m-3 rounded list-border page-header">
              <div className="col justify-content-center">
                <form className="login">
                  <div className="form-group text-center">
                    <h2><strong>Add a New Recipe</strong></h2>
                  </div>
                  <div className="row">
                    <div className="col justify-content-center text-center clearfix">
                      <CreateModal />
                      {/* <button type="submit" className="btn btn-block btn-info active float-right" id="search-btn"></button> */}
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-1"></div>
            </div>
            <div className="row shadow p-3 m-3 rounded list-border recipe-list">
              <div className="col text-center justify-content-center">
                <h2><strong>My Recipes</strong></h2>
                {userRecipes && userRecipes.map((recipe) => (
                  <RecipeCard key={recipe._id} _id={recipe._id} title={recipe.title} prep={recipe.prep} ingredients={recipe.ingredients} categories={recipe.categories}/>
                ))}
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>

  );



}
export default AddRecipe;
