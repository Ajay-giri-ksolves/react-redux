// src/components/RecipeForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../redux/actions';

function RecipeForm() {
    var [name, setName] = useState('');
    var [category, setCategory] = useState('');
    var [ingredients, setIngredients] = useState('');
    var [instructions, setInstructions] = useState('');

    var dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();

        var recipe = {
            id: new Date().getTime(),
            name: name,
            category: category,
            ingredients: ingredients.split(','),
            instructions: instructions,
        };

        dispatch(addRecipe(recipe));

        setName('');
        setCategory('');
        setIngredients('');
        setInstructions('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={function (event) { setName(event.target.value); }}
                placeholder="Recipe Name"
            />
            <input
                type="text"
                value={category}
                onChange={function (event) { setCategory(event.target.value); }}
                placeholder="Category"
            />
            <input
                type="text"
                value={ingredients}
                onChange={function (event) { setIngredients(event.target.value); }}
                placeholder="Ingredients (comma-separated)"
            />
            <textarea
                value={instructions}
                onChange={function (event) { setInstructions(event.target.value); }}
                placeholder="Cooking Instructions"
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
}

export default RecipeForm;
