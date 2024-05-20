const getCartItems = async(userId) =>{
    const id = {
        idusuario: userId
    }
    const url = "https://proyecto-final-be.onrender.com/getCartItems";
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