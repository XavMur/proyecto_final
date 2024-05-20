const handleCartItems = async(cartItems, userId) =>{
    let quantity = cartItems.length;
    console.log(userId);
    const cartData = {
        idUsuario: userId,
        idProducto: cartItems[0].id,
        quantity: quantity
    }
    const url = "https://proyecto-final-be.onrender.com/cartData";
    const res = await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartData)
    });
    const data = await res.json();
    console.log(data);
}

export default handleCartItems;