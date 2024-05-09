import React from "react";
import MainViewItemComponent from "../components/MainViewItemComponent";
import CarouselComponent from "../components/CarouselComponent";
import SliderComponent from "../components/SliderComponent";

const MainView = () => {
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

  ];

  
  return (
    <div>
      <div className="main">
        <div className="row main-carousel">
          <CarouselComponent items={items} height={'200px'} width={"90%"} />
        </div>

        <div className="d-flex justify-content-center">
          <SliderComponent items={items}/>
        </div>

        <div className="row" style={{ maxWidth: "99%", marginLeft: "5px" }}>
          <MainViewItemComponent
            image={
              "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
            }
            title={"Nombre del producto"}
            price={1000}
          />
          <MainViewItemComponent
            image={
              "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
            }
            title={"Nombre del producto"}
            price={1000}
          />
          <MainViewItemComponent
            image={
              "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
            }
            title={"Nombre del producto"}
            price={1000}
          />
          <MainViewItemComponent
            image={
              "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
            }
            title={"Nombre del producto"}
            price={1000}
          />
          <MainViewItemComponent
            image={
              "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
            }
            title={"Nombre del producto"}
            price={1000}
          />
          <MainViewItemComponent
            image={
              "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
            }
            title={"Nombre del producto"}
            price={1000}
          />
          <MainViewItemComponent
            image={
              "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
            }
            title={"Nombre del producto"}
            price={1000}
          />
          <MainViewItemComponent
            image={
              "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
            }
            title={"Nombre del producto"}
            price={1000}
          />
          <MainViewItemComponent
            image={
              "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
            }
            title={"Nombre del producto"}
            price={1000}
          />
          <MainViewItemComponent
            image={
              "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
            }
            title={"Nombre del producto"}
            price={1000}
          />
          <MainViewItemComponent
            image={
              "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
            }
            title={"Nombre del producto"}
            price={1000}
          />
          <MainViewItemComponent
            image={
              "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
            }
            title={"Nombre del producto"}
            price={1000}
          />
          <MainViewItemComponent
            image={
              "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
            }
            title={"Nombre del producto"}
            price={1000}
          />
          <MainViewItemComponent
            image={
              "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
            }
            title={"Nombre del producto"}
            price={1000}
          />
          <MainViewItemComponent
            image={
              "https://i.ebayimg.com/images/g/pHwAAOSw7Cdh5uD5/s-l1200.webp"
            }
            title={"Nombre del producto"}
            price={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default MainView;
