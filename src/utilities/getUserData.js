const getUserData = async(email) =>{
    const emailData = {
        email:email
    }
    const baseUrl = "http://localhost:3000/getUserData";
    const res = await fetch(baseUrl,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
    });
    const data = await res.json();
    return data;
}
export default getUserData;