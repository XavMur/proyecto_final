import ButtonComponent from "../components/ButtonComponent";
import MainViewItemComponent from "../components/MainViewItemComponent";

export const CartView = () => {
    const numeroProductos = 2
  return (
    <div className="cart-view">
        <div className="cart-items">
        <div className="card">
            <div className="card-header">
                <h1>Cart</h1>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item cart-item">
                    <MainViewItemComponent
                        image={
                        "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
                        }
                        title={"Nombre del producto"}
                        price={1000}
                    />
                    <p>Description</p>
                </li>
                <li className="list-group-item cart-item">
                    <MainViewItemComponent
                            image={
                            "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
                            }
                            title={"Nombre del producto"}
                            price={1000}
                    />
                    <p>Description</p>
                </li>
                <li className="list-group-item cart-item">
                    <MainViewItemComponent
                            image={
                            "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
                            }
                            title={"Nombre del producto"}
                            price={1000}
                    />
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
            <MainViewItemComponent
                    image={
                    "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
                    }
                    title={"Nombre del producto"}
                    price={1000}
            />
            <MainViewItemComponent
                    image={
                    "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
                    }
                    title={"Nombre del producto"}
                    price={1000}
            />
            <MainViewItemComponent
                    image={
                    "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
                    }
                    title={"Nombre del producto"}
                    price={1000}
            />
            
        </div>

    </div>
  )
}

export default CartView;