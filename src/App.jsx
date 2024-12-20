import React from 'react';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';
import FilterRecipes from './FilterRecipes';

function App() {
    return (
        <div>
            <h1>Recipe Management App</h1>
            <FilterRecipes />
            <RecipeForm />
            <RecipeList />
        </div>
    );
}

export default App;
