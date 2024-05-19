import { useEffect, useState } from "react";
import MainViewItemComponent from "../components/MainViewItemComponent";
import getProducts from "../utilities/getProducts";
import getCategories from "../utilities/getCategories";
import { useParams } from "react-router-dom";

export const GridView = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isChecked, setIsChecked] = useState([]);
  const { catId } = useParams();
  const handleCheckboxChange = (index) => {
    setIsChecked((prevState) => {
      let updatedArray = [...prevState];
      updatedArray[index] = !updatedArray[index];
      return updatedArray;
    });
    console.log(isChecked);
  };

  const generateCatCheck = (categories) => {
    let catMap = [];
    categories.map((category) => {
      if (category.id == Number(catId) + 1) {
        catMap.push(true);
      } else {
        catMap.push(false);
      }
    });
    setIsChecked(catMap);
  };

  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data);
      generateCatCheck(data);
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
          categories.map((categ, index) => (
            <div key={categ.id} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={isChecked[index]}
                value={isChecked[index]}
                id="flexCheckDefault"
                onChange={() => handleCheckboxChange(index)}
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
