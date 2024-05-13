import React from "react";
import { useNavigate } from "react-router-dom";

const BannerComponent = ({ width, height, image, border = 0, path }) => {
  const navigate = useNavigate();

  return (
    <img
      onClick={() => navigate(path)}
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
