const getProducts = async (selCategories) => {
    const categories = ['nike', 'converse', 'adidas', 'northStar', 'retro', 'mujeres', 'kids', 'deporte', 'casual'];
    const baseUrl = "http://localhost:3000/productos?";    
    const categoryQueries = selCategories.map(categoryIndex => `categoria[]=${categories[categoryIndex]}`);
    const queryString = categoryQueries.join('&');
    const res = await fetch(baseUrl + queryString);
    const data = await res.json();
    console.log(baseUrl+queryString)
    return data;
};

export default getProducts;