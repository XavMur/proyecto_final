import { useContext } from "react";
import ButtonComponent from "./ButtonComponent";
import { CartContext } from "../context/CartContext";

export const CardComponent = ({
  product,
  currency,
  price,
  condition,
  quantity,
  shipping,
  delivery,
  returns,
  payments,
}) => {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const addProductToCart = () => {
    setCartProducts([...cartProducts, product]);
  };
  return (
    <div className="card" style={{ width: "95%" }}>
      <div className="card-body">
        <h5 className="card-title">
          {currency} {price}
        </h5>
        <p className="card-text">Condicion: {condition} </p>
        <p className="card-text" style={{ display: "flex" }}>
          Quantity: <span className="quantity">{quantity}</span>{" "}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "5%",
          }}
        >
          <ButtonComponent
            buttonBody={"Buy It Now"}
            path={""}
            width={"auto"}
            height={"auto"}
            variant={"primary"}
          />
          <br />
          <ButtonComponent
            buttonBody={"Add To Cart"}
            path={""}
            width={"auto"}
            height={"auto"}
            variant={"primary"}
            onClick={() => addProductToCart()}
          />
        </div>
        <div className="card-detail">
          <strong style={{ marginRight: "10%" }}>Shipping:</strong>
          <p>{shipping}</p>
        </div>
        <div className="card-detail">
          <strong style={{ marginRight: "10%" }}>Delivery:</strong>
          <p>{delivery}</p>
        </div>
        <div className="card-detail">
          <strong style={{ marginRight: "10%" }}>Returns:</strong>
          <p>{returns}</p>
        </div>
        <div className="card-detail">
          <strong style={{ marginRight: "10%" }}>Payments:</strong>
          <div className="payments">
            {payments.map((payment) => (
              <img
                src={payment.img}
                key={payment.img}
                alt={payment.desc}
                style={{ width: "20%", height: "50%" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
