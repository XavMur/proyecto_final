import { useEffect, useState } from "react";
import MainViewItemComponent from "../components/MainViewItemComponent";
import getProducts from "../utilities/getProducts";
import getCategories from "../utilities/getCategories";

export const GridView = () => {
    const [products, setProducts] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };
    useEffect(() => {
        getProducts([4]).then((data) => {
        setProducts(data);
        });
    }, []);
  return (
    <div className="grid-view">
        <div className="sidebar">
            <h3>Categorias</h3>
            {
                categories 
                ?categories.map(categ=>(
                    <div key={categ.id} className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={isChecked}
                            id="flexCheckDefault"
                            onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label">
                            {categ.nombre}
                        </label>
                    </div>
                ))
                :
                <div></div>
            }
        </div>
        <div className="container grid-container">
            <div className="row" style={{marginTop:"1rem "}}>
                {
                    products ? (
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
    </div>
  );
}

export default GridView;
