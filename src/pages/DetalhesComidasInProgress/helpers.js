export const filterMeasures = (recipe) => Object
  .entries(recipe)
  .filter((key) => key[0].includes('strMeasure') && key[1])
  .map((e) => e[1]);

export const filterIngredients = (recipe) => Object
  .entries(recipe)
  .filter((key) => key[0].includes('strIngredient') && key[1])
  .map((e) => e[1]);
