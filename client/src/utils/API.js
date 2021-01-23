import axios from "axios";

export default {
  //get all Recipes
  getRecipes: function() {
    return axios.get("/api/recipes");
  },
  //get all Ingredients
  getIngredients: function() {
    return axios.get("/api/ingredients");
  },
  //get Rating of recipe
  getRating: function() {
    return axios.get("/api/rating")
  }
};