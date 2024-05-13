const getProducts = async (selCategories = [0], categories) => {
    let query;
    const baseUrl = "http://localhost:3000/productos?";
    if(categories == "*"){
        query = baseUrl + "categoria=*"
    }
    else{
        const categoryQueries = selCategories.map(categoryIndex => `categoria[]=${categories[categoryIndex].categoria}`);
        const queryString = categoryQueries.join('&');
        query = baseUrl + queryString
    }    
    const res = await fetch(query);
    const data = await res.json();
    return data;
};

export default getProducts;