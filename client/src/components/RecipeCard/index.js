import React, { useState, useEffect } from "react";
import "./style.css";
import ViewModal from "../ViewRecipeModal";
import API from "../../utils/API";

function RecipeCard(props) {
  const [rating, setRating] = useState();

  const getRating= () => {
    API.getRating(props._id)
      .then((res) => {
        console.log(props);
        setRating(res.data[0].avgRating);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getRating(props._id);
  }, []);

  return (
        <>
            <div className="card mb-3 ">
              <div className="row no-gutters shadow rounded recipe-card">
                <div className="col-md-4">
                  <img className="m-3" src="/images/fruit.jpg" alt="..."></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{children}</h5>
                    <h6>Ingredients:</h6>
                    <p className="card-text">example, orange juice, bananas, peanut butter, oat milk</p>
                    <p className="card-text"><small className="text-muted">Rating: 4/5</small></p>
                    <ViewModal />
                    <button type="button" className="btn btn-block btn-danger float-right">Delete Recipe</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h6 className="m-2">Categories:</h6>
                  <ul>
                    {props.recipes.categories && props.recipes.categories.map((category) => (
                      <li key={category}>{category}</li>
                    ))}
                  </ul>
                  <h6 className="m-2">Ingredients:</h6>
                  <ul>
                    {props.recipes.ingredients && props.recipes.ingredients.map((ingredient) => (
                      <li key={ingredient}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className="col">
                  <h6>Preparation:</h6>
                  {props.recipes.prep}
                </div>
              </div>
              <div className="row m-2 clearfix">
                <ViewModal className="m-2 float-right"/>
              </div>
            </div>
        </>
  );
}

export default RecipeCard;