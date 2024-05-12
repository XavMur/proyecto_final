import React from "react";
import BannerComponent from "../components/CategoryBannerComponent";
import SliderComponent from "../components/SliderComponent";

const mainView = () => {
  let items = [
    {
      id: 1,
      img: "https://profutbolista.com/wp-content/uploads/2023/07/1571165602_906420_1571166462_noticia_normal.jpg",
      title: "AAA",
      description: "CCC",
    },
    {
      id: 2,
      img: "https://profutbolista.com/wp-content/uploads/2023/07/1571165602_906420_1571166462_noticia_normal.jpg",
      title: "AAA",
      description: "CCC",
    },
    {
      id: 3,
      img: "https://profutbolista.com/wp-content/uploads/2023/07/1571165602_906420_1571166462_noticia_normal.jpg",
      title: "AAA",
      description: "CCC",
    },
    {
      id: 4,
      img: "https://profutbolista.com/wp-content/uploads/2023/07/1571165602_906420_1571166462_noticia_normal.jpg",
      title: "AAA",
      description: "CCC",
    },
    {
      id: 5,
      img: "https://profutbolista.com/wp-content/uploads/2023/07/1571165602_906420_1571166462_noticia_normal.jpg",
      title: "AAA",
      description: "CCC",
    },
  ];
  return (
    <div>
      <div className="row" style={{ maxWidth: "99vw" }}>
        <div className="col-12 col-md-6 col-lg-6 main-banner">
          <BannerComponent
            width={"100%"}
            height={"90%"}
            border={"50px"}
            image={
              "https://i.insider.com/642ca4ccd335200018ddab95?width=1136&format=jpeg"
            }
          />
        </div>
        <div className="col-12 col-md-6 col-lg-6 main-banner">
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
        style={{ marginBottom: "20px", width: "100%" }}
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
        <br />
        <SliderComponent height={"30vh"} maxheight={"auto"} items={items} />
      </div>
      <div className="main-banner">
        <BannerComponent
          width={"97vw"}
          height={"60vh"}
          border={"50px"}
          image={"src/img/banner_largo.png"}
        />
      </div>
      <div
        className="categories"
        style={{ width: "90%", marginBottom: "20px" }}
      >
        <p style={{ fontWeight: "bolder", fontSize: "35px" }}>
          Tendencia ahora
        </p>
        <div className="row ">
          <div className="col-12 col-lg-3 trend-text">aa</div>
          <div className="col-12 col-lg-3 trend-text">bbb</div>
          <div className="col-12 col-lg-3 trend-text">ccc</div>
          <div className="col-12 col-lg-3 trend-text">ddd</div>
          <div className="col-12 col-lg-3 trend-text">ddd</div>
          <div className="col-12 col-lg-3 trend-text">ddd</div>
        </div>
      </div>
    </div>
  );
};

export default mainView;
