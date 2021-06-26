import { useState } from 'react'
import CartItem from './CartItem'

const Cart = () => {
    
    const [products, setProducts] = useState(
             [
            {
            title: "Mobile",
            qty: 100,
            price: 9999,
            id: 1
            },
            {
            title: "Laptop",
            qty: 5,
            price: 99999,
            id:2
            },
            {
            title: "iPad",
            qty: 10,
            price: 90999,
            id:3
            }]
    )

        const handleIncreaseQuantity = (product) =>{
                const index = products.indexOf(product)
                products[index].qty += 1; 
                setProducts([...products])
        }

        const handleDecreaseQuantity = (product) =>{
            const index = products.indexOf(product)

            if(products[index].qty > 0){
                products[index].qty -= 1; 
                setProducts([...products])
            }
            
    }

        const handleDeleteQuantity = (product) =>{
             const productId = product.id
             const newProducts = products.filter((item) => (item.id !== productId))
             setProducts(newProducts)
        }

    return (
        <div>
            {products.map((product) => 
               (<CartItem product = {product}
                onIncreaseQty = {handleIncreaseQuantity}
                onDecreaseQty = {handleDecreaseQuantity}
                onDeleteQty = {handleDeleteQuantity}
                key={product.id}/>)
            )}
         
        </div> );
}
 
export default Cart;