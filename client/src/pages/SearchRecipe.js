import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";

function SearchRecipe() {



    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 mt-5">
                        <h2>Search for a Recipe</h2>
                    </div>
                </div>
                <div className="row shadow p-3 m-3 rounded list-border">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <form className="login">
                            <div className="form-group">
                                <label htmlFor="searchRecipe">Search Recipe</label>
                                <input type="text" className="form-control shadow p-3 m-3 bg-white rounded" id="recipe-search"
                                    placeholder="Search Input"></input>
                            </div>

                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Low Sugar</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                <label class="form-check-label" for="inlineCheckbox2">High Protein</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"></input>
                                <label class="form-check-label" for="inlineCheckbox1">Low Carb</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"></input>
                                <label class="form-check-label" for="inlineCheckbox2">Weight Loss</label>
                            </div>


                            <div className="row">
                                <div className="col-12 text-center clearfix">
                                    <button type="submit" className="btn btn-dark active float-right" id="search-btn">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
            <RecipeCard />
            <Footer />
        </>

    )



}
export default SearchRecipe