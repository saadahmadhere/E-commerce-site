import CartItem from './CartItem'

const Cart = (props) => {
    return (
        <div>
            {props.products.map((product) => 
               (<CartItem
                product = {product}
                onIncreaseQty = {props.onIncreaseQty}
                onDecreaseQty = {props.onDecreaseQty}
                onDeleteQty = {props.onDeleteQty}
                key={product.id}/>
                )
            )}
         
        </div> );
}
 
export default Cart;