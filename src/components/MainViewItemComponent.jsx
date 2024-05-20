import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainViewItemComponent = ({
  image,
  title,
  price,
  height = "auto",
  width = "auto",
  id = 0,
}) => {
  const [currentId, setCurrentId] = useState(id);
  useEffect(() => {}, [currentId]);
  const navigate = useNavigate();
  const changeRoute = () => {
    navigate(`/product/${id}`);
    setCurrentId(id);
  };
  return (
    <div className="main-item-container">
      <img
        className="main-item-img"
        onClick={changeRoute}
        src={image}
        style={{
          maxHeight: "80%",
          width: width,
          height: height,
          borderRadius: "15px",
        }}
      />
      <strong>{title}</strong>
      <p>{price}$</p>
    </div>
  );
};

export default MainViewItemComponent;
