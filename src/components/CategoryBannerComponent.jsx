import React from "react";
import { useNavigate } from "react-router-dom";

const BannerComponent = ({ width, height, image, border = 0, path }) => {
  const navigate = useNavigate();
  const changePage = () => {
    navigate(path);
  };

  return (
    <img
      onClick={() => changePage()}
      src={image}
      style={{
        width: width,
        height: height,
        borderRadius: border,
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "10px",
      }}
    />
  );
};

export default BannerComponent;
