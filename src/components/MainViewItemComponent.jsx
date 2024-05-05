import React from "react";

const MainViewItemComponent = () => {
  return (
    <div className="main-grid-item">
      <img
        src="https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
        style={{ maxHeight: "80%", width: "100%" }}
      />
      <strong style={{ textAlign: "center" }}>Titulo del producto</strong>
      <p>Precio: 100000$</p>
    </div>
  );
};

export default MainViewItemComponent;
