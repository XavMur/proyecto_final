import React, { useEffect, useState } from "react";
import BannerComponent from "../components/CategoryBannerComponent";
import SliderComponent from "../components/SliderComponent";
import getTrends from "../utilities/getTrends";
import { useNavigate } from "react-router-dom";
import getProducts from "../utilities/getProducts";

const MainView = () => {
  const navigate = useNavigate();
  const changeRoute = (id) => {
    navigate(`/products/${id}`);
  };
  const [trends, setTrends] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    getTrends().then((data) => {
      setTrends(data);
    });
  }, []);

  useEffect(() => {
    getProducts([0], "*").then((data) => {
      setItems(data);
    });
  }, [trends]);

  return (
    <div>
      <div className="row" style={{ maxWidth: "99vw" }}>
        <div className="col-12 col-md-6 col-lg-6 main-banner">
          <h1 style={{ textAlign: "center" }}>Retro</h1>
          <BannerComponent
            path={"/products/4"}
            width={"100%"}
            height={"90%"}
            border={"50px"}
            image={
              "https://i.insider.com/642ca4ccd335200018ddab95?width=1136&format=jpeg"
            }
          />
        </div>
        <div className="col-12 col-md-6 col-lg-6 main-banner">
          <h1 style={{ textAlign: "center" }}>Mujeres</h1>
          <BannerComponent
            path={"/products/5"}
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
        style={{
          textAlign: "center",
          fontWeight: "bolder",
          fontSize: "20px",
          marginTop: "20px",
        }}
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
            path={"/products/0"}
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
            path={"/products/1"}
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
            path={"/products/2"}
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
            path={"/products/3"}
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
      <div className="long-banner">
        <BannerComponent
          path={"/products/7"}
          width={"97vw"}
          height={"60vh"}
          border={"50px"}
          image={"https://i.ibb.co/VNQ4wSv/banner-largo.png"}
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
          {trends.map((trend) => (
            <div
              className="col-12 col-lg-4"
              key={trend.categoria}
              onClick={() => {
                changeRoute(trend.id - 1);
              }}
            >
              <span className="trend-text">{trend.categoria}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainView;
