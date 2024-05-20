import { useContext, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import handleCartItems from "../utilities/handleCartItems";
import { LoginContext } from "../context/LoginContext";
import getUserData from "../utilities/getUserData";

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
  const { user } = useContext(LoginContext);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();
  const addProductToCart = async () => {
    let i = 0;
    let currentProducts = [...cartProducts];
    while (i < amount) {
      currentProducts.push(product);
      i += 1;
    }
    setCartProducts(currentProducts);
    const userData = await getUserData(user.email);
    const userId = userData[0].id;
    handleCartItems(currentProducts, userId);
    setCartProducts([]);
    navigate("/cart");
  };
  const handleSelect = (e) => {
    e.preventDefault();
    setButtonDisabled(false);
    if (e.target.value) {
      setAmount(e.target.value);
    } else {
      setAmount(1);
    }
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
              <option value={0} disabled>
                Seleccione la cantidad
              </option>
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
            disabled={buttonDisabled}
          />
          <br />
          <ButtonComponent
            buttonBody={"Add To Cart"}
            path={""}
            width={"auto"}
            height={"auto"}
            variant={"primary"}
            disabled={buttonDisabled}
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
