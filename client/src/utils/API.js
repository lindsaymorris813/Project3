const axios = require("axios");

export const userImageUpload = (file) => {
  const formData = new FormData();
  const config = {
    withCredentials:true
  };
  formData.append("file",file);
  return axios.post("/api/user/upload", formData, config);
};

export const recipeImageUpload = (file) => {
  const formData = new FormData();
  const config = {
    withCredentials:true
  };
  formData.append("file",file);
  return axios.post("/api/recipe/upload",formData,config);
};