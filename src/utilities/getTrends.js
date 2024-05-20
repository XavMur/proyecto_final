const getTrends = async () => {
    const baseUrl = "https://proyecto-final-be.onrender.com/tendencias";
    const res = await fetch(baseUrl);
    const data = await res.json();
    return data;
  };
  
  export default getTrends;
  