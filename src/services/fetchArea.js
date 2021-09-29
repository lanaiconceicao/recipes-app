const fetchArea = async () => {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const data = await response.json();
    return Object.values(data)[0]
      .map((area) => area.strArea);
  } catch (error) {
    console.error(error);
  }
};

export default fetchArea;
