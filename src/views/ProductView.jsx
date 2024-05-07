import CardComponent from "../components/CardComponent";
import CarouselComponent from "../components/CarouselComponent";
import MainViewItemComponent from "../components/MainViewItemComponent";
import SellerTag from "../components/SellerTag";

export const ProductView = () => {

    let items = [{
        "id":1,
        "img":'https://profutbolista.com/wp-content/uploads/2023/07/1571165602_906420_1571166462_noticia_normal.jpg',
        "title":"AAA",
        "description":"CCC"
    },
    {
        "id":2,
        "img":'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ronaldinho_11feb2007.jpg/200px-Ronaldinho_11feb2007.jpg',
        "title":"BBB",
        "description":"XXX"
    }]
  return (
    <>
        <div className="product-view">
            <div className="product-carousel">
                <CarouselComponent 
                    items={items}
                    height={'70vh'} 
                    maxheight={'100vh'} 
                    width={"90%"} 
                />
            </div>
            <div className="product-description">
                <h2 className="product-title">
                    Product Title
                </h2>
                <SellerTag />
                <div style={{display:"flex",justifyContent:"center"}}>
                    <CardComponent 
                        currency={"US"}
                        price={"$599.99"}
                        condition={"New"}
                        quantity={"1"}
                        shipping={"US $52.00 (approx Bs. 358.67) USPS First Class Mail International / First Class Package International Service. See detailsfor shipping International shipment of items may be subject to customs processing and additional charges. Located in: Peoria, Arizona, United States"}
                        delivery={
                            "Estimated between Tue, May 21 and Mon, Jun 17 to 00000 Please note the delivery estimate is greater than 10 business days. Please allow additional time if international delivery is subject to customs processing."}
                        returns={"30 days returns. Buyer pays for return shipping"}
                        payments={[{"img":"aaa","desc":"aaa"},{"img":"bbb","desc":"bbb"}]}
                    />
                </div>
            </div>
        </div>
        <br/>
        <div>
            <h4 style={{marginLeft:"1%"}}>Productos Relacionados</h4>
            <div className="row" style={{ maxWidth: "99%"}}>
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
    </>
  )
}

export default ProductView;