import { useEffect, useState } from 'react'
import Cart from './Cart'
import Navbar from './Navbar'
import firebase from './firebase'

function App() {

    const [products, setProducts] = useState([])
    const ref = firebase.firestore().collection('products');

   useEffect(()=>{

       ref.onSnapshot((snapshot) => { //onSnapshot is fired whenever something changes in the collection.
      const items = [];
      snapshot.forEach((doc) =>{
        const data = doc.data();
        items.push(data)
        data['id'] = doc.id
        
      })
      setProducts(items);

    })

   },[]);

    const handleIncreaseQuantity = (product) =>{
          
          ref.doc(product.id)
          .update({
            qty: product.qty+1
          })
          .then(console.log('Quantity updated successfully'))
          .catch((error) => console.log(error))
    }

    const handleDecreaseQuantity = (product) =>{
      
      if(product.qty === 0){
        return;
      }
      ref.doc(product.id)
      .update({
        qty: product.qty-1
      })
      .then(console.log('Quantity decreased successfully'))
      .catch((error) => console.log(error))
      
    }

    const handleDeleteQuantity = (product) =>{

        firebase.firestore().collection('products')
        .doc(product.id)
        .delete()
        .catch((error) => console.log(error))
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

    // const addProduct =() =>{
    //   firebase.firestore().collection('products')
    //   .add({
    //     img: '',
    //     price: 999,
    //     title: "Washing machine",
    //     qty: 2
    //   })
    //   .catch((e) => console.log(e))
    // }

  return (
    <div className="App">
      <Navbar count = {getCartCount()}/>
      {/* <button onClick = {addProduct}>Add product</button> */}
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
