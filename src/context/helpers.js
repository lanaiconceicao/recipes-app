/* TODO colocar objetos e funcoes complementares para diminuir linha */
export const favoriteMeal = {
  id: recipe.idMeal,
  type: 'comida',
  area: recipe.strArea,
  category: recipe.strCategory,
  alcoholicOrNot: '',
  name: recipe.strMeal,
  image: recipe.strMealThumb,
};

export const favoriteDrink = {
  id: recipe.idDrink,
  type: 'bebida',
  area: '',
  category: recipe.strCategory,
  alcoholicOrNot: recipe.strAlcoholic,
  name: recipe.strDrink,
  image: recipe.strDrinkThumb,
};

export const verifySearchMeal = {
  byIngredient: 'fetchMealByIngredient',
  byName: 'fetchMealByName',
  byFirstLetter: 'fetchMealByFirstLetter',
};

export const verifySearchCocktail = {
  byIngredient: 'fetchCocktailByIngredient',
  byName: 'fetchCocktailByName',
  byFirstLetter: 'fetchCocktailByFirstLetter',
};

/* const date = new Date();
     const mealToSave = {
      id: recipe.idMeal,
      type: 'comida',
      area: recipe.strArea,
      category: recipe.strCategory,
      alcoholicOrNot: '',
      name: recipe.strMeal,
      image: recipe.strMealThumb,
      doneDate: `${date.getDate()}/${date.getMonth}/${date.getFullYear()}`,
      tags: recipe.strTags ? [...recipe.strTags.split(',')] : [],
    };
    const drinkToSave = {
      id: recipe.idDrink,
      type: 'bebida',
      area: '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic,
      name: recipe.strDrink,
      image: recipe.strDrinkThumb,
      doneDate: `${date.getDate()}/${date.getMonth}/${date.getFullYear()}`,
      tags: recipe.strTags ? [...recipe.strTags.split(',')] : [],
    }; */
