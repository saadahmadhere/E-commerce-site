import { useState } from 'react'
import Cart from './Cart'
import Navbar from './Navbar'

function App() {

      const [products, setProducts] = useState(
        [
      {
      title: "Mobile",
      qty: 100,
      price: 9999,
      img: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      id: 1
      },
      {
      title: "Laptop",
      qty: 5,
      price: 99999,
      img:'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
      id:2
      },
      {
      title: "iPad",
      qty: 10,
      price: 90999,
      img:'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1003&q=80',
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

    const getCartCount = () =>{
      var count = 0;

      products.forEach((item) => ( 
        count += item.qty
      ))

      return count;
    }

    const getCartTotal = () =>{

      var count = 0;
      products.map((product) =>(
        count += product.qty*product.price
        ))
        return count;
    }

  return (
    <div className="App">
      <Navbar count = {getCartCount()}/>
      <Cart 
          products = {products}
          onIncreaseQty = {handleIncreaseQuantity}
          onDecreaseQty = {handleDecreaseQuantity}
          onDeleteQty = {handleDeleteQuantity}
      />
      <div className="cart-total">
        TOTAL: {getCartTotal()}
      </div>
    </div>
  );
}

export default App;
