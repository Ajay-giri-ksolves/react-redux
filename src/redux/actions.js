export function addRecipe(recipe) {
    return { type: 'ADD_RECIPE', payload: recipe };
}

export function editRecipe(id, updatedRecipe) {
    return { type: 'EDIT_RECIPE', payload: { id: id, updatedRecipe: updatedRecipe } };
}

export function deleteRecipe(id) {
    return { type: 'DELETE_RECIPE', payload: id };
}

export function filterByCategory(category) {
    return { type: 'FILTER_BY_CATEGORY', payload: category };
}
