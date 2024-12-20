import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteRecipe } from '../redux/actions';

function RecipeList() {
    var recipes = useSelector(function (state) {
        return state.filter === 'All'
            ? state.recipes
            : state.recipes.filter(function (recipe) {
                return recipe.category === state.filter;
            });
    });

    var dispatch = useDispatch();

    function handleDelete(id) {
        dispatch(deleteRecipe(id));
    }

    return (
        <div>
            {recipes.map(function (recipe) {
                return (
                    <div key={recipe.id}>
                        <h3>{recipe.name}</h3>
                        <p><strong>Category:</strong> {recipe.category}</p>
                        <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
                        <p><strong>Instructions:</strong> {recipe.instructions}</p>
                        <button onClick={function () { handleDelete(recipe.id); }}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default RecipeList;
