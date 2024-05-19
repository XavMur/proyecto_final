import { useEffect, useState } from "react";
import MainViewItemComponent from "../components/MainViewItemComponent";
import getProducts from "../utilities/getProducts";
import getCategories from "../utilities/getCategories";
import { useParams } from "react-router-dom";

export const GridView = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const { catId } = useParams();
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      getProducts([catId], categories).then((data) => {
        setProducts(data);
      });
    }
  }, [categories]);

  return (
    <div className="grid-view">
      <div className="sidebar">
        <p className="categories-title">Categorias</p>
        {categories ? (
          categories.map((categ) => (
            <div key={categ.id} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={isChecked}
                id="flexCheckDefault"
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label">{categ.categoria}</label>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
      <div className="container grid-container">
        <div className="row" style={{ marginTop: "1rem " }}>
          {products ? (
            products.map((product) => (
              <div key={product.id} className="col-12 col-md-4 col-lg-3">
                <MainViewItemComponent
                  image={product.imagenproducto}
                  title={product.nombreproducto}
                  price={product.precio}
                  height="35vh"
                  id={product.id}
                />
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GridView;
