import React from "react";

function RecipeCard() {

    return (
        <>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="..." alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Recipe Name Here</h5>
                            <h6>Ingredients:</h6>
                            <p className="card-text">example, orange juice, bananas, peanut butter, oat milk</p>
                            <p className="card-text"><small className="text-muted">Rating: 4/5</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RecipeCard