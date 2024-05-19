const handleUser = async(userInfo) =>{
    let user;
    if(userInfo.password)
        {
            user = {
                usuario: userInfo.name,
                email: userInfo.email,
                password: userInfo.password
            }
        } else{
            user = {
                usuario: userInfo.name,
                email: userInfo.email
            }
        }
    const url = "http://localhost:3000/usuarios";
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