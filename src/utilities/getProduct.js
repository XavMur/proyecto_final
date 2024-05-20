const getProduct = async(id) => {
    const url = `https://proyecto-final-be.onrender.com/producto?id=${id}`;    
    const res = await fetch(url);
    const data = await res.json();
    return data;

}

export default getProduct