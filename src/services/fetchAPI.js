const fetchAPI = async (chooseUrl, query) => {
  const verifyUrl = {
    fetchMealByIngredient: `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`,

    fetchMealByFirstLetter: `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`,

    fetchMealById: `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${query}`,

    fetchMealByName: `https://www.themealdb.com/api/json/
    v1/1/search.php?s=${query}`,

    fetchCocktailById: `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${query}`,

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
    // tratando null para evitar de quebrar verificacao com length
    if (!Object.values(data)[0]) return [];
    // Retornar somente primeira chave sendo `meals` ou `drinks`
    return Object.values(data)[0];
  } catch (error) {
    console.error(error);
  }
};

export default fetchAPI;
