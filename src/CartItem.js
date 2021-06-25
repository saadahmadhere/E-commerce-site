import { useState } from "react";

const CartItem = () => {
    const [itemDetails, setItemDetails] = useState({
        title: "Phone",
        qty: 1,
        price: 999
    });

    const addButtonHandler = () =>{
        setItemDetails(prevState => {
            return {...prevState, qty: prevState.qty +1}
        });
    }

    const removeButtonHandler = () =>{
        if(itemDetails !== 0){
            setItemDetails(prevState => {
                return {...prevState, qty: prevState.qty -1}
            });
        }
    }

    return (
        <div className="cart-item">
            <div className="right-block">
                <img className = "product-image"  alt="Product" />
            </div>
            <div className="left-block">
                <h3>{itemDetails.title}</h3>
                <div style = {{color: '#777'}}>Rs.{itemDetails.price}</div> 
                <div style = {{color: '#777'}}>Qty: {itemDetails.qty}</div>
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