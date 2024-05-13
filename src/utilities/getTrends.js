const getTrends = async () => {
    const baseUrl = "http://localhost:3000/tendencias";
    const res = await fetch(baseUrl);
    const data = await res.json();
    return data;
  };
  
  export default getTrends;
  