import React, { useState, useEffect } from 'react';
import { APP_ID, APP_KEY } from '../userApi';
import RecipeItem from './RecipeItem';
import './recipesList.scss';

const RecipesList = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    fetchData();

    //es-lint-disable-next-line
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await res.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  return (
    <div className='main-container'>
      {recipes.map(r => (
        <RecipeItem image={r.recipe.image} />
      ))}
    </div>
  );
};

export default RecipesList;
