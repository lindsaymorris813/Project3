import React, { useState } from "react";
import Header from "../components/Header";
import SearchRecipeCard from "../components/SearchRecipeCard";
import Nav from "../components/Nav";
import API from "../utils/API";

function SearchRecipe() {
  const [foundRecipes, setFoundRecipes] = useState([]);
  const [searchBar, setSearchBar] = useState();

  function recipeSearch(query) {
    API.searchRecipes(query)
      .then((res) => console.log(res))
      .catch(err => console.log(err));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(searchBar);
    recipeSearch(searchBar);
  }

  function handleInputChange(event) {
    const { value } = event.target;
    setSearchBar(value);
  }

  // const handleCheckClick = (id) => {
  //   switch (id) {
  //   case "lowSugar":
  //     setQueryCategory((currState) => (
  //       currState.lowSugar ? {...currState, lowSugar: false } : {...currState, lowSugar: true }
  //     ));
  //     break;
  //   case "highProtein":
  //     setQueryCategory((currState) => (
  //       currState.highProtein ? {...currState, highProtein: false } : {...currState, highProtein: true }
  //     ));
  //     break;
  //   case "lowCarb":
  //     setQueryCategory((currState) => (
  //       currState.lowCarb ? {...currState, lowCarb: false } : {...currState, lowCarb: true }
  //     ));
  //     break;
  //   case "weightLoss":
  //     setQueryCategory((currState) => (
  //       currState.weightLoss ? {...currState, weightLoss: false } : {...currState, weightLoss: true }
  //     ));
  //     break;
  //   default:
  //     break;
  //   }
  // };

  return (
    <>
      <Header />
      <div className="row">
        <Nav />
        <div className="col-9">
          <div className="container">
            <div className="row"></div>
            <div className="row shadow p-3 m-3 rounded list-border page-header">
              <div className="col-1"></div>
              <div className="col-10">
                <form className="login">
                  <div className="form-group">
                    <label htmlFor="searchRecipe"><h2><strong>Search for a Recipe</strong></h2></label>
                    <input type="text" className="form-control shadow p-3 m-3 bg-white rounded" id="recipe-search"
                      placeholder="Search Input" onChange={handleInputChange}></input>
                  </div>
                </form>
                <div className="row">
                  <div className="col-12 text-center clearfix">
                    <button type="submit" className="btn btn-dark active float-right" id="search-btn" onClick={handleSubmit}>Submit</button>
                  </div>
                </div>
              </div>
              <div className="col-1"></div>
            </div>
            <div className="row shadow p-3 m-3 rounded list-border recipe-list">
              <div className="col-1"></div>
              <div className="col-10">
                <h2><strong>Search Results</strong></h2>
                <SearchRecipeCard key="a"/>
                <SearchRecipeCard key="b"/>
                <SearchRecipeCard key="c"/>
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default SearchRecipe;