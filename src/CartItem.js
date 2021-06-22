import { useState } from "react";

const CartItem = () => {
    const [quantity, setQuantity] = useState(1);

    const addButtonHandler = () =>{
        setQuantity(quantity+1);
    }

    const removeButtonHandler = () =>{
        setQuantity(quantity-1);
    }

    return (
        <div className="cart-item">
            <div className="right-block">
                <img className = "product-image"  alt="Product" />
            </div>
            <div className="left-block">
                <div>Phone</div>
                <div>Rs.999</div> 
                <div>Qty: {quantity}</div>
                <div className="cart-item-buttons">
                   <img onClick = {addButtonHandler} className = "action-icons" src="https://image.flaticon.com/icons/png/512/992/992651.png" alt="" />
                   <img onClick = {removeButtonHandler} className = "action-icons" src="https://image.flaticon.com/icons/png/512/992/992683.png" alt="minus sign" />
                   <img className = "action-icons" src="https://image.flaticon.com/icons/png/512/3096/3096673.png" alt="delete icon" />
                </div>
            </div>
        </div>
    )
}

export default CartItem;