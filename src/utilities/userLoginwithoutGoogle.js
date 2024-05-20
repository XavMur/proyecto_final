const userLoginWithoutGoogle = async(email, password) =>{
    const emailVerif ={
        email: email,
        password: password
    }
    const url = "https://proyecto-final-be.onrender.com/usuarioLogin2";
    const res = await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailVerif)
    });
    const data = await res.json();
    return data;
}
export default userLoginWithoutGoogle;