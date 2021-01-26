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
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img className="m-3"src="/images/fruit.jpg" alt="..."></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title m-2">{props.recipes.title}</h5>
                    <h6 className="muted">{rating}/5 stars</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h6 className="m-2">Categories:</h6>
                  <ul>
                    {props.recipes.categories && props.recipes.categories.map((category) => (
                      <li>{category}</li>
                    ))}
                  </ul>
                  <h6 className="m-2">Ingredients:</h6>
                  <ul>
                    {props.recipes.ingredients && props.recipes.ingredients.map((ingredient) => (
                      <li>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className="col">
                  {props.recipes.prep}
                </div>
              </div>
              <button type="button" className="btn btn-danger btn-sm m-2">Delete Recipe</button>
              <button type="button" className="btn btn-info btn-sm m-2">Save Recipe</button>
              <ViewModal />


            </div>
        </>
  );
}

export default RecipeCard;