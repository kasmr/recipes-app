import React, { useEffect, useState } from 'react';
import { APP_ID, APP_KEY } from '../userApi';
import RecipeBody from './RecipeBody';
import RecipeTable from './RecipeTable';
import RecipeIngredients from './RecipeIngredients';

const Recipe = ({ match }) => {
  const [currentRecipe, setCurrentRecipe] = useState([]);

  const passedTitle = match.params.title;
  const passedSource = match.params.source;
  const passedTime = match.params.time;

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.edamam.com/search?q=${passedTitle}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await res.json();
    console.log(data.hits);
    setCurrentRecipe(data.hits);
  };

  return (
    <>
      {currentRecipe
        .filter(
          r =>
            //eslint-disable-next-line
            r.recipe.source === passedSource && r.recipe.totalTime == passedTime
        )
        .map(r => (
          <div key={r.recipe.uri}>
            <RecipeBody recipe={r.recipe} />
            <RecipeIngredients recipe={r.recipe} />
            <RecipeTable recipe={r.recipe} />
          </div>
        ))}
    </>
  );
};

export default Recipe;
