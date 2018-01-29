import React, { Component } from 'react';
import RecipeList from '../containers/recipe_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center text-primary">Recipe Box App</h2>
        <RecipeList />
        <h6 className="text-center">Created by <a href="https://bhaviksheth.github.io" target="__blank">Bhavik Sheth</a></h6>
      </div>
    );
  }
}