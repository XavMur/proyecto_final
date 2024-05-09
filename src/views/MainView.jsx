import React from "react";
import BannerComponent from "../components/CategoryBannerComponent";

const mainView = () => {
  return (
    <div>
      <div className="row" style={{ maxWidth: "99vw" }}>
        <div className="col-12 col-md-6 col-lg-6">
          <BannerComponent
            width={"100%"}
            height={"90%"}
            border={"50px"}
            image={
              "https://i.insider.com/642ca4ccd335200018ddab95?width=1136&format=jpeg"
            }
          />
        </div>
        <div className="col-12 col-md-6 col-lg-6">
          <BannerComponent
            width={"100%"}
            height={"90%"}
            border={"50px"}
            image={
              "https://pyxis.nymag.com/v1/imgs/0bc/4b4/af7d0aa04cba2c31c7800b769a46cc133b-27-teen-sneakers-lede.2x.rsocial.w600.jpg"
            }
          />
        </div>
      </div>
      <p
        style={{ textAlign: "center", fontWeight: "bolder", fontSize: "20px" }}
      >
        Ofrecemos las mejores zapatillas en el mercado, de las marcas mas
        prestigiosas en el mundo
      </p>
      <div
        className="row d-flex justify-content-center logo-container"
        style={{ marginBottom: "20px" }}
      >
        <div
          className="col-12 col-md-6 col-lg-3 brand"
          style={{ width: "10%" }}
        >
          <BannerComponent
            width={"80%"}
            height={"80%"}
            image={
              "https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png"
            }
          />
        </div>
        <div
          className="col-12 col-md-6 col-lg-3 brand"
          style={{ width: "10%" }}
        >
          <BannerComponent
            width={"80%"}
            height={"80%"}
            image={
              "https://upload.wikimedia.org/wikipedia/commons/e/eb/Converse_shoe_company_logo.png"
            }
          />
        </div>
        <div
          className="col-12 col-md-6 col-lg-3 brand"
          style={{ width: "10%" }}
        >
          <BannerComponent
            width={"80%"}
            height={"80%"}
            image={
              "https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png"
            }
          />
        </div>
        <div
          className="col-12 col-md-6 col-lg-3 brand"
          style={{ width: "15%" }}
        >
          <BannerComponent
            width={"100%"}
            height={"100%"}
            image={
              "https://upload.wikimedia.org/wikipedia/commons/d/dc/NorthStar_logo.svg"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default mainView;
