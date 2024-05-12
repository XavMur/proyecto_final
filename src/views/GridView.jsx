import MainViewItemComponent from "../components/MainViewItemComponent";

export const GridView = ({products}) => {
  return (
    <div className="container">
        <div className="row" style={{marginTop:"1rem "}}>
            {
                products ?
                products.map(product=>(
                    <div key={product.id} className="col-12 col-md-4 col-lg-3">
                        <MainViewItemComponent
                            image={product.img}
                            title={product.title}
                            price={product.price}
                        />
                    </div>
                ))
                :
                <div></div>
            }
        </div>
    </div>
  )
}

export default GridView;