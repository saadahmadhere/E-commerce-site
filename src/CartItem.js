
const CartItem = (props) => {
  
    return (
        <div className="cart-item">
            <div className="right-block">
                <img className = "product-image"  alt="Product" />
            </div>
            <div className="left-block">
                <h3>{props.product.title}</h3>
                <div style = {{color: '#777'}}>Rs.{props.product.price}</div> 
                <div style = {{color: '#777'}}>Qty: {props.product.qty}</div>
                <div className="cart-item-buttons">
                   <img onClick = {() => props.onIncreaseQty(props.product)} className = "action-icons" src="https://image.flaticon.com/icons/png/512/992/992651.png" alt="" />
                   <img onClick = {() => props.onDecreaseQty(props.product)} className = "action-icons" src="https://image.flaticon.com/icons/png/512/992/992683.png" alt="minus sign" />
                   <img onClick = {() => props.onDeleteQty(props.product)} className = "action-icons" src="https://image.flaticon.com/icons/png/512/3096/3096673.png" alt="delete icon" />
                </div>
            </div>
        </div>
    )
}

export default CartItem;