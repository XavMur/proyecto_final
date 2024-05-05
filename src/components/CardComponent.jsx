import ButtonComponent from "./ButtonComponent";


export const CardComponent = ({currency,price,condition,quantity,shipping,delivery,returns,payments}) => {
  return (
    <div className="card" style={{width: "95%"}}>
        <div className="card-body">
            <h5 className="card-title">{currency} {price}</h5>
            <p className="card-text">Condition: {condition} </p>
            <p className="card-text" style={{display:"flex"}}>Quantity: <span className="quantity">{quantity}</span> </p>
            <div style={{display:"flex", flexDirection:"column",alignItems:"center", marginBottom:"5%"}}>
                <ButtonComponent buttonBody={"Buy It Now"}/>
                <ButtonComponent buttonBody={"Add To Cart"}/> 
            </div>    
            <div className="card-detail">
                <strong style={{marginRight:"10%"}}>Shipping:</strong> 
                <p>{shipping}</p> 
            </div>
            <div className="card-detail">
                <strong style={{marginRight:"10%"}}>Delivery:</strong> 
                <p>{delivery}</p> 
            </div>
            <div className="card-detail">
                <strong style={{marginRight:"10%"}}>Returns:</strong> 
                <p>{returns}</p> 
            </div> 
            <div className="card-detail">
                <strong style={{marginRight:"10%"}}>Payments:</strong> 
                <div className="payments">
                    {
                        payments.map(payment => (
                            <img src={payment.img} key={payment.img} alt={payment.desc} />
                        ))
                    }
                </div>
            </div>  
        </div>
    </div>
  )
}

export default CardComponent;