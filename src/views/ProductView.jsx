import CardComponent from "../components/CardComponent";
import CarouselComponent from "../components/CarouselComponent";
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
    <div className="product-view">
        <div className="product-carousel">
            <CarouselComponent items={items} height={'100vh'} width={"90%"} />
            
        </div>
        <div className="product-description">
            <h2 className="product-title">
                Product Title
            </h2>
            <SellerTag />
            <div style={{display:"flex",justifyContent:"center"}}>
                <CardComponent 
                    currency={"US"}
                    price={"599.99"}
                    condition={"New"}
                    quantity={"1"}
                />
            </div>
        </div>
    </div>
  )
}

export default ProductView;