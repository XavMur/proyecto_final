const getProducts = async () => {
  const baseUrl = "https://proyecto-final-be-5vjy.onrender.com/categorias";
  const res = await fetch(baseUrl);
  const data = await res.json();
  return data;
};

export default getProducts;
