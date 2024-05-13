const getProducts = async (selCategories, categories) => {
    const baseUrl = "http://localhost:3000/productos?";    
    const categoryQueries = selCategories.map(categoryIndex => `categoria[]=${categories[categoryIndex].categoria}`);
    const queryString = categoryQueries.join('&');
    const res = await fetch(baseUrl + queryString);
    const data = await res.json();
    return data;
};

export default getProducts;