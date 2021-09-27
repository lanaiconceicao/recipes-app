const fetchCategories = async (mealOrDrink) => {
  const NUMBER_OF_CATEGORIES = 5;
  try {
    const response = await fetch(`https://www.the${mealOrDrink}db.com/api/json/v1/1/list.php?c=list`);
    const data = await response.json();
    return Object.values(data)[0]
      .slice(0, NUMBER_OF_CATEGORIES)
      .map((category) => category.strCategory);
  } catch (error) {
    console.error(error);
  }
};

export default fetchCategories;
