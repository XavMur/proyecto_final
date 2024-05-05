import React from "react";

const MainViewItemComponent = () => {
  return (
    <div className="col-12 col-md-4 col-lg-3  main-item">
      <img
        src="https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
        style={{
          marginLeft: "30px",
          marginTop: "10px",
          maxHeight: "80%",
          width: "90%",
          borderRadius: "15px",
        }}
      />
      <strong>Titulo del producto</strong>
      <p>Precio: 100000$</p>
    </div>
  );
};

export default MainViewItemComponent;
