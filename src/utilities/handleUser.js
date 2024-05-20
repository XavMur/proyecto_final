const handleUser = async(userInfo) =>{
    let user;
    if(userInfo.password)
        {
            user = {
                usuario: userInfo.name || userInfo.nombre,
                email: userInfo.email,
                password: userInfo.password || userInfo.pass
            }
        } else{
            user = {
                usuario: userInfo.name || userInfo.nombre,
                email: userInfo.email
            }
        }
    const url = "https://proyecto-final-be-5vjy.onrender.com/usuarios";
    const res = await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    const data = await res.json();
}

export default handleUser;