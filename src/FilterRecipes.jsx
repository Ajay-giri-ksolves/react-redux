import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByCategory } from '../redux/actions';

function FilterRecipes() {
    var dispatch = useDispatch();

    function handleFilterChange(event) {
        dispatch(filterByCategory(event.target.value));
    }

    return (
        <select onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
        </select>
    );
}

export default FilterRecipes;
