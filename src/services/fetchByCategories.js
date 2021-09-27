const fetchByCategories = async (mealOrDrink, category) => {
  try {
    const response = await fetch(`https://www.the${mealOrDrink}db.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    const changeCocktailToDrink = mealOrDrink === 'cocktail' ? 'drinks' : 'meals';
    return data[changeCocktailToDrink];
  } catch (error) {
    console.error(error);
  }
};

export default fetchByCategories;
