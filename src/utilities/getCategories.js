const getProducts = async () => {
  const baseUrl = "http://localhost:3000/categorias";
  const res = await fetch(baseUrl);
  const data = await res.json();
  return data;
};

export default getProducts;
