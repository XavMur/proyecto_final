import React from "react";
import MainViewItemComponent from "../components/MainViewItemComponent";
import CarouselComponent from "../components/CarouselComponent";

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
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ronaldinho_11feb2007.jpg/200px-Ronaldinho_11feb2007.jpg",
      title: "BBB",
      description: "XXX",
    },
  ];
  return (
    <div>
      <div className="main">
        <div className="row" style={{ width: "100%" }}>
          <CarouselComponent items={items} height={"200px"} />
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
