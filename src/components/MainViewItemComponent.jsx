import React from "react";
import { useNavigate } from "react-router-dom";

const MainViewItemComponent = ({ image, title, price }) => {
  const navigate = useNavigate();
  const changeRoute = () => {
    navigate("/product");
  };
  return (
    <div className="col-12 col-md-4 col-lg-3  main-item">
      <div className="main-item-container">
        <img
          onClick={changeRoute}
          src={image}
          style={{
            maxHeight: "80%",
            width: "90%",
            borderRadius: "15px",
          }}
        />
        <strong>{title}</strong>
        <p>{price}$</p>
      </div>
    </div>
  );
};

export default MainViewItemComponent;
