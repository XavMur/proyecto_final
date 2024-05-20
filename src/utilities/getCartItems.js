const getCartItems = async(userId) =>{
    const id = {
        idusuario: userId
    }
    const url = "http://localhost:3000/getCartItems";
    const res = await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
    });
    const data = await res.json();
    return data
}

export default getCartItems;