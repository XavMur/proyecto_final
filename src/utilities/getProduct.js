const getProduct = async(id) => {
    const url = `http://localhost:3000/producto?id=${id}`;    
    const res = await fetch(url);
    const data = await res.json();
    return data;

}

export default getProduct