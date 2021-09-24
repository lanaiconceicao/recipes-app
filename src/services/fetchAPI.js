const fetchAPI = async (chooseUrl, query) => {
  const verifyUrl = {
    fetchMealByIngredient: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`,

    fetchMealByName: `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,

    fetchMealByFirstLetter: `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`,

    fetchCocktailByIngredient: `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`,

    fetchCocktailByName: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`,

    fetchCocktailByFirstLetter: `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${query}`,
  };

  if (query.length !== 1
    && (chooseUrl === 'fetchMealByFirstLetter'
    || chooseUrl === 'fetchCocktailByFirstLetter')) {
    global.alert('Sua busca deve conter somente 1 (um) caracter');
  }
  try {
    const response = await fetch(verifyUrl[chooseUrl]);
    const data = await response.json();
    return data;
  } catch (error) {
    global.alert('Houve algum erro');
  }
};

export default fetchAPI;
