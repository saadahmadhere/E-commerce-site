
const CartItem = () => {

    return (
        <div className="cart-item">
            <div className="right-block">
                <img className = "product-image"  alt="Product Image" />
            </div>
            <div className="left-block">
                <div>Phone</div>
                <div>Rs.999</div> 
                <div>Qty: 1</div>
                <div className="cart-item-buttons">
                   <img className = "action-icons" src="https://image.flaticon.com/icons/png/512/992/992651.png" alt="" />
                   <img className = "action-icons" src="https://image.flaticon.com/icons/png/512/992/992683.png" alt="minus sign" />
                   <img className = "action-icons" src="https://image.flaticon.com/icons/png/512/3096/3096673.png" alt="delete icon" />
                </div>
            </div>
        </div>
    )
}

export default CartItem;