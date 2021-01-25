const axios = require("axios");

export default {
  recipeImageUpload :(file) => {
    const formData = new FormData();
    const config = {
      withCredentials:true
    };
    formData.append("file",file);
    return axios.post("/api/recipes/:id/upload",formData,config);
  },
  userImageUpload : (file) => {
    const formData = new FormData();
    const config = {
      withCredentials:true
    };
    formData.append("file",file);
    return axios.post("/api/users/upload", formData, config);
  },
  //get Recipes from Search
  searchRecipes: function(query) {
    return axios.get("/api/recipes");
  },
  //add new Recipe
  addRecipe: function(recipeData) {
    return axios.post("/api/recipes", recipeData);
  },
  //get Recipe by Id
  findRecipe: function(id) {
    return axios.get("api/recipes/" + id);
  },
  //delete Recipe by ID
  deleteRecipe: function(id) {
    return axios.get("api/recipes/" + id);
  },
  //add Image to Recipe by ID
  uploadRecipeImage: function(id, imageURL) {
    return axios.get("api/recipes/" + id + "/upload", imageURL);
  },
  //get all Ingredients
  getIngredients: function() {
    return axios.get("/api/ingredients");
  },
  //add new Ingredient
  addIngredient: function(name) {
    return axios.get("api/ingredients", name);
  },
  //get Rating of recipe
  getRating: function() {
    return axios.get("/api/rating");
  },
  //get UserInfo
  getUserInfo: function(){
    return axios.get("/api/users/userinfo");
  }
};