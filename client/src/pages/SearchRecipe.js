import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RecipeCard from "../components/RecipeCard";
import Nav from "../components/Nav";
import API from "../utils/API";

function SearchRecipe() {
  // const [queryCategory, setQueryCategory] = useState({
  //   lowSugar: false,
  //   highProtein: false,
  //   lowCarb: false,
  //   weightLoss: false
  // });

  // const [searchBar, setSearchBar] = useState([]);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   if (searchBar) {
  //     API.searchRecipes(searchBar)
  //       .then((res) => console.log(res.data))
  //       .catch(err => console.log(err));
  //   }
  // }

  // function handleInputChange(event) {
  //   const { value } = event.target;
  //   setSearchBar(value);
  // }

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
            <div className="row shadow p-3 m-3 rounded list-border">
              <div className="col-1"></div>
              <div className="col-10">
                {/* <form className="login">
                  <div className="form-group">
                    <label htmlFor="searchRecipe"><h2>Search for a Recipe</h2></label>
                    <input type="text" className="form-control shadow p-3 m-3 bg-white rounded" id="recipe-search"
                      placeholder="Search Input" onChange={handleInputChange}></input>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="lowSugar" value="Low Sugar" click={handleCheckClick("lowSugar")}></input>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Low Sugar</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="highProtein" value="High Protein" click={handleCheckClick("highProtein")}></input>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">High Protein</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="lowCarb" value="Low Carb" click={handleCheckClick("lowCarb")}></input>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">Low Carb</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="weightLoss" value="Weight Loss" click={handleCheckClick("weightLoss")}></input>
                    <label className="form-check-label" htmlFor="inlineCheckbox2">Weight Loss</label>
                  </div>

                  <div className="row">
                    <div className="col-12 text-center clearfix">
                      <button type="submit" className="btn btn-dark active float-right" id="search-btn" onClick={handleSubmit}>Submit</button>
                    </div>
                  </div>
                </form> */}
              </div>
              <div className="col-1"></div>
            </div>
            <div className="row shadow p-3 m-3 rounded list-border">
              <div className="col-1"></div>
              <div className="col-10">
                <RecipeCard key="a"/>
                <RecipeCard key="b"/>
                <RecipeCard key="c"/>
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

export default SearchRecipe;