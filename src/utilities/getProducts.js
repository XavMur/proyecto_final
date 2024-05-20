const getProducts = async (selCategories = [0], categories) => {
    let query;
    const baseUrl = "https://proyecto-final-be.onrender.com/productos?";
    if(categories == "*" || selCategories.length <= 0){
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