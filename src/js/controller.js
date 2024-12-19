import "core-js/stable";
import "regenerator-runtime/runtime";
import * as model from "../js/model.js";
import recipeView from "../js/views/recipeView.js";
import searchView from "./views/seachRecipe.js";
import resultsView from "./views/resultsView.js";
import paginationView from "./views/paginationView.js";
import addRecipeView from "./views/addRecipeView.js";

///////////////////////////////////////
// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    const query = searchView.getQury();
    if (!query) return;
    await model.loadSearchResult(query);
    resultsView.render(model.getSearchResultPage());
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(`${err}`);
  }
};
const controlPagination = function (gotoPage) {
  resultsView.render(model.getSearchResultPage(gotoPage));
  paginationView.render(model.state.search);
};
const controlAddRecipe = async function (newRecipe) {
  try {
    await model.uploadRecipe(newRecipe);
  } catch (err) {
    addRecipeView.renderError(err.message);
  }
};
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();

controlSearchResults();
