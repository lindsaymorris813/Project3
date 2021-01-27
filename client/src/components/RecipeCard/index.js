import React from "react";
import "./style.css";
import ViewModal from "../ViewRecipeModal";

function RecipeCard({ children }) {

  return (
        <>
            <div className="card mb-3 ">
              <div className="row no-gutters shadow rounded recipe-card">
                <div className="col-md-4">
                  <img src="/images/fruit.jpg" alt="..."></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{children}</h5>
                    <h6>Ingredients:</h6>
                    <p className="card-text">example, orange juice, bananas, peanut butter, oat milk</p>
                    <p className="card-text"><small className="text-muted">Rating: 4/5</small></p>
                    <button type="button" className="btn btn-danger btn-sm">Delete Recipe</button>
                    <button type="button" className="btn btn-info btn-sm">Save Recipe</button>
                    <ViewModal />
                  </div>
                </div>
              </div>
            </div>
        </>
  );
}

export default RecipeCard;