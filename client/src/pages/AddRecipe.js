import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import RecipeCard from "../components/RecipeCard";

function AddRecipe() {



  return (
        <>
            <Header />
            <div className="row">
              <Nav />
              <div className="col-9">
                <div className="container">
                  <div className="row"></div>
                  <div className="row shadow p-3 m-3 rounded list-border">
                    <div className="col-1"></div>
                    <div className="col-10">
                      <form className="login">
                        <div className="form-group">
                          <h2>Add a New Recipe</h2>
                        </div>
                        <div className="row">
                          <div className="col-12 text-center clearfix">
                            <button type="submit" className="btn btn-block btn-info active float-right" id="search-btn">Click here to add new recipe</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-1"></div>
                  </div>
                  <div className="row shadow p-3 m-3 rounded list-border">
                    <div className="col-1"></div>
                    <div className="col-10">
                      <h2>My Recipes</h2>
                      <RecipeCard />
                      <RecipeCard />
                      <RecipeCard />
                    </div>
                    <div className="col-1"></div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
        </>

  );



}
export default AddRecipe;
