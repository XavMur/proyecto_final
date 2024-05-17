import { useEffect, useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import MainViewItemComponent from "../components/MainViewItemComponent";
import SliderComponent from "../components/SliderComponent";
import getProducts from "../utilities/getProducts";

export const CartView = () => {
    const numeroProductos = 2
    const [items, setItems] = useState([]);
    useEffect(() => {
        getProducts([0], "*").then((data) => {
          setItems(data);
        });
      }, []);

    let cartItems = [{
        "id":0
    }]

  return (
    <div className="cart-view">
        <div className="cart-items">
        <div className="card">
            <div className="card-header">
                <h1>Cart</h1>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item cart-item">
                   {
                    cartItems.map(item=>(
                        <MainViewItemComponent
                            key={item.id}
                            image={item.imagenproducto}
                            title={item.nombreproducto}
                            pice={item.precio}
                            id={item.id}
                            width={"50%"}
                            height={"100%"}
                        />
                    ))
                   }
                    <p>Description</p>
                </li>
            </ul>
        </div>
        </div>
        <div className="cart-details">
            <h3>Subtotal {numeroProductos} Productos </h3>
            <ButtonComponent 
                buttonBody={"Proceed To Pay"}
                path = {''}
                width = {'60%'}
                height = {'auto'}
                variant = {'warning'}
            />
        </div>
        <div className="cart-products">
            <h3>Otros Productos</h3>
            <SliderComponent height={"30vh"} maxheight={"auto"} items={items} />
        </div>

    </div>
  )
}

export default CartView;