import { useEffect, useState } from "react";
import MainViewItemComponent from "../components/MainViewItemComponent";
import getProducts from "../utilities/getProducts";

export const GridView = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts([4]).then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "1rem " }}>
        {products ? (
          products.map((product) => (
            <div key={product.id} className="col-12 col-md-4 col-lg-3">
              <MainViewItemComponent
                image={product.imagenproducto}
                title={product.nombreproducto}
                price={product.precio}
                height="35vh"
              />
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default GridView;
