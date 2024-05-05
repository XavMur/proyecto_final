import ButtonComponent from "./ButtonComponent";


export const CardComponent = ({currency,price,condition,quantity}) => {
  return (
    <div className="card" style={{width: "95%"}}>
        <div className="card-body">
            <h5 className="card-title">{currency} {price}</h5>
            <p className="card-text">Condition: {condition} </p>
            <p className="card-text" style={{display:"flex"}}>Quantity: <span className="quantity">{quantity}</span> </p>
            <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
                <ButtonComponent buttonBody={"Buy It Now"}/>
                <ButtonComponent buttonBody={"Add To Cart"}/> 
            </div>      
        </div>
    </div>
  )
}

export default CardComponent;