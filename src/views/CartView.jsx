import { useContext, useEffect, useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import MainViewItemComponent from "../components/MainViewItemComponent";
import SliderComponent from "../components/SliderComponent";
import getProducts from "../utilities/getProducts";
import { CartContext } from "../context/CartContext";

export const CartView = () => {
  const [items, setItems] = useState([]);
  const { cartProducts, setCartProducts } = useContext(CartContext);
  useEffect(() => {
    getProducts([0], "*").then((data) => {
      setItems(data);
    });
  }, []);
  console.log("cartProducts", cartProducts);

  const getAmount = (id) => {
    const amount = cartProducts.filter((item) => item.id == id).length;
    return amount;
  };

  const uniqueCartProducts = cartProducts.filter(
    (item, index, self) => index === self.findIndex((t) => t.id === item.id)
  );

  const numeroProductos = cartProducts.length;

  return (
    <div className="cart-view">
      <div className="cart-items">
        <div className="card">
          <div className="card-header">
            <h1>Cart</h1>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item cart-item">
              <div className="row">
                {uniqueCartProducts.map((item) => (
                  <div key={item.id + 1} className="row mb-3 cart-item">
                    <div className="col-6">
                      <MainViewItemComponent
                        image={item.imagenproducto}
                        title={item.nombreproducto}
                        price={item.precio}
                        width={"50%"}
                        height={"100%"}
                        id={item.id}
                      />
                    </div>
                    <div className="col-6 d-flex justify-content-evenly align-items-end">
                      <h5>Cantidad: </h5>
                      <h5>{getAmount(item.id)}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="cart-details">
        <h3>Subtotal {numeroProductos} Productos </h3>
        <ButtonComponent
          buttonBody={"Pagar"}
          path={""}
          width={"60%"}
          height={"auto"}
          variant={"warning"}
        />
      </div>
      <div className="cart-products">
        <h3>Otros Productos</h3>
        <SliderComponent height={"30vh"} maxheight={"auto"} items={items} />
      </div>
    </div>
  );
};

export default CartView;
