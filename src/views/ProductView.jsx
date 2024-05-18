import { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import CarouselComponent from "../components/CarouselComponent";
import MainViewItemComponent from "../components/MainViewItemComponent";
import SellerTag from "../components/SellerTag";
import { useParams } from "react-router-dom";
import getProduct from "../utilities/getProduct";
import getProducts from "../utilities/getProducts";
import SliderComponent from "../components/SliderComponent";

export const ProductView = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    getProducts([0], "*").then((data) => {
      setItems(data);
    });
  }, []);
  const [producto, setProducto] = useState([]);
  useEffect(() => {
    getProduct(id).then((data) => {
      setProducto(data[0]);
    });
  }, []);
  return (
    <>
      {id != 0 ? (
        <>
          <div className="product-view">
            <div className="product-carousel">
              <CarouselComponent
                items={producto}
                height={"70vh"}
                maxheight={"100vh"}
                width={"90%"}
              />
            </div>
            <div className="product-description">
              <h2 className="product-title">{producto.nombreproducto}</h2>
              <SellerTag descripcion={producto.descripcion} />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <CardComponent
                  product={producto}
                  currency={"US"}
                  price={producto.precio}
                  condition={"Nuevo"}
                  quantity={producto.stock}
                  shipping={
                    "US $52.00 (approx Bs. 358.67) USPS First Class Mail International / First Class Package International Service. See detailsfor shipping International shipment of items may be subject to customs processing and additional charges. Located in: Peoria, Arizona, United States"
                  }
                  delivery={
                    "Estimated between Tue, May 21 and Mon, Jun 17 to 00000 Please note the delivery estimate is greater than 10 business days. Please allow additional time if international delivery is subject to customs processing."
                  }
                  returns={"30 days returns. Buyer pays for return shipping"}
                  payments={[
                    {
                      img: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png",
                      desc: "paypal",
                    },
                    {
                      img: "https://t4.ftcdn.net/jpg/04/06/75/39/360_F_406753914_SFSBhjhp6kbHblNiUFZ1MXHcuEKe7e7P.jpg",
                      desc: "card",
                    },
                    {
                      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7Iv5crmkMjzjK0urN9Fn3H0XUjZcN8YaYDAllcJqyA&s",
                      desc: "qr",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <br />
        </>
      ) : (
        <h1
          className="d-flex justify-content-center my-3"
          style={{ minHeight: "26vh" }}
        >
          Producto no encontrado
        </h1>
      )}

      <div>
        <h4 style={{ marginLeft: "1%" }}>Productos Relacionados</h4>
        <div className="row mx-2" style={{ maxWidth: "99%" }}>
          <SliderComponent height={"30vh"} maxheight={"auto"} items={items} />
        </div>
      </div>
    </>
  );
};

export default ProductView;
