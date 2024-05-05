import React from "react";

const MainViewItemComponent = ({ image, title, price }) => {
  return (
    <div className="col-12 col-md-4 col-lg-3  main-item">
      <img
        src={image}
        style={{
          marginLeft: "30px",
          marginTop: "10px",
          maxHeight: "80%",
          width: "90%",
          borderRadius: "15px",
        }}
      />
      <strong>{title}</strong>
      <p>{price}$</p>
    </div>
  );
};

export default MainViewItemComponent;
