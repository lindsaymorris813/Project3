const axios = require("axios");

export default {
  recipeImageUpload :(file) => {
    const formData = new FormData();
    const config = {
      withCredentials:true
    };
    formData.append("file",file);
    return axios.post("/api/recipe/upload",formData,config);
  },
  userImageUpload : (file) => {
    const formData = new FormData();
    const config = {
      withCredentials:true
    };
    formData.append("file",file);
    return axios.post("/api/user/upload", formData, config);
  },
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