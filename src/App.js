import { useEffect, useState } from 'react'
import Cart from './Cart'
import Navbar from './Navbar'
import firebase from './firebase'

function App() {

    const [products, setProducts] = useState([])

   useEffect(()=>{
    const ref = firebase.firestore().collection('products');

    ref.onSnapshot((snapshot) => {
      const items = [];
      snapshot.forEach((doc) =>{
        items.push(doc.data());
      })
      console.log(items)
      setProducts(items);

    })

   },[]);

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
        setProducts([...newProducts])
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
