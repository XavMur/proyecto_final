import { useContext, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

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
  const [amount, setAmount] = useState(0);
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const navigate = useNavigate();
  const addProductToCart = () => {
    let i = 0;
    let currentProducts = [...cartProducts];
    while (i < amount) {
      currentProducts.push(product);
      i += 1;
    }
    setCartProducts(currentProducts);
    navigate("/cart");
  };
  const handleSelect = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };
  const options = Array.from({ length: quantity }, (_, index) => index + 1);
  return (
    <div className="card" style={{ width: "95%" }}>
      <div className="card-body">
        <h5 className="card-title">
          {currency} {price}
        </h5>
        <p className="card-text">Condicion: {condition} </p>
        <p className="card-text" style={{ display: "flex" }}>
          Cantidad:{" "}
          <span className="quantity">
            <select value={amount} onChange={(e) => handleSelect(e)}>
              {options.map((q, index) => (
                <option key={index}>{q}</option>
              ))}
            </select>
          </span>{" "}
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
