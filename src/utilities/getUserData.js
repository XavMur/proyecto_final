const getUserData = async(email) =>{
    const emailData = {
        email:email
    }
    const baseUrl = "https://proyecto-final-be.onrender.com/getUserData";
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