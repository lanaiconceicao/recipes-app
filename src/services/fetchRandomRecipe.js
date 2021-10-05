const fetchRandomRecipe = async (mealOrDrink) => {
  try {
    const response = await fetch(`https://www.the${mealOrDrink}db.com/api/json/v1/1/random.php`);
    const data = await response.json();
    return Object.values(data)[0];
  } catch (error) {
    console.error(error);
  }
};

export default fetchRandomRecipe;
