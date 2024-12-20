var initialState = {
    recipes: [],
    filter: 'All',
};

function recipeReducer(state, action) {
    if (state === undefined) state = initialState;

    if (action.type === 'ADD_RECIPE') {
        return {
            ...state,
            recipes: state.recipes.concat(action.payload),
        };
    } else if (action.type === 'EDIT_RECIPE') {
        return {
            ...state,
            recipes: state.recipes.map(function (recipe) {
                if (recipe.id === action.payload.id) {
                    return action.payload.updatedRecipe;
                }
                return recipe;
            }),
        };
    } else if (action.type === 'DELETE_RECIPE') {
        return {
            ...state,
            recipes: state.recipes.filter(function (recipe) {
                return recipe.id !== action.payload;
            }),
        };
    } else if (action.type === 'FILTER_BY_CATEGORY') {
        return {
            ...state,
            filter: action.payload,
        };
    }
    return state;
}

export default recipeReducer;
