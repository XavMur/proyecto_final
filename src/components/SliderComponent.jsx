import React from "react";
import { Carousel } from "react-bootstrap";
import MainViewItemComponent from "./MainViewItemComponent";

const SliderComponent = ({ height, maxheight, items }) => {
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 4) {
    groupedItems.push(items.slice(i, i + 4));
  }
  return (
    <Carousel indicators={false} style={{ width: "100%", marginTop: "2rem" }}>
      {groupedItems.map((group, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex  main-item">
            {group.map((item) => (
              <MainViewItemComponent
                key={item.id}
                image={item.imagenproducto}
                title={item.nombreproducto}
                price={item.precio}
                width={"22vw"}
                height={"30vh"}
                id={item.id}
              />
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SliderComponent;
