import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

//firebase setup step 2
import {
  doc,
  setDoc,
  collection,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  // doc,
} from "firebase/firestore";
import { db } from "./index";


class App extends React.Component {
  
  constructor(){
    super();
    //This is State which have diff diff types 
    //Now we ,map it and return CartItem With values
    this.state={
        products:[]
    }
  }
  
  //function to change 
  // async componentDidMount() {
  //this is a realtime listener if you change anything in firebase ui will automatically updated 

    // const q = query(
    //   collection(db, "products"),
    //   where("price", ">", 0),
    //   orderBy("price")
    //  );
    componentDidMount() {
      const q = collection(db, "products");
      const unsub = onSnapshot(q, (querySnapshot) => {
      const getProducts = [];
      querySnapshot.forEach((doc) => {
        const product = doc.data();  
        product.id = doc.id;
        getProducts.push(product);
      });
      console.log(getProducts);
      this.setState({ products: getProducts, loading: false });
    });
  }
  

handleIncreaseQuantity = (product)=>{
    const { products } = this.state;
    const index = products.indexOf(product);
    // Now change the Quantity of product[index]
    const docRef = doc(collection(db, "products") , products[index].id)
    updateDoc(docRef , {
      qty: products[index].qty + 1
    });
    // products[index].qty +=1;
    // this.setState({
    //     products: products
    // })
}

handleDecreaseQuantity = (product)=>{
    //First we find on Which products we chamges inside the state()
    const {products} = this.state;
    const index = products.indexOf(product);
    //set VALUE OF qty on the given index product
    const docRef = doc(collection(db,'products') , products[index].id);
    if(products[index].qty > 1){
      updateDoc(docRef , {
        qty : products[index].qty - 1
      });
    } 
    // if(products[index].qty >1 ){ products[index].qty -= 1; }
    // this.setState({
    //     products
    // })
}

handleDelete = (productToDelete)=>{
    // const {products} = this.state;
    //filter() method used to create new Array with some operation
    // const items = products.filter(item=> item.id !== id);
    //'item' is the new Array after deleting the records
    // this.setState({
    //     products : items
    // })
    
    const docRef = doc(collection(db , "products") , productToDelete);
    deleteDoc(docRef)
    .then(()=>{
      console.log('Product is deleted');
    })
    .catch((err)=>{
      console.log(err);
    });
 }

getCartCount = ()=>{
  const {products} = this.state;
  let count = 0;

  products.forEach( (product)=>{
    count += product.qty;
  })
  return count;
 }

 getCartTotal = ()=>{
    const {products} = this.state;
    let CartTotal=0
    products.map( (product)=>{
        CartTotal+= product.qty * product.price;
    })
    return CartTotal;
 }
 
  render() {
    const { products} = this.state;
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}/>
        <Cart
          products =  {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreasingQuantity = {this.handleDecreaseQuantity}
          onDeleting = { this.handleDelete }

        />
        {/* <h1>Hi This is render tag</h1> */}
        <div style={{padding :20 , fontSize :20 ,color:'darkBlue'}}>Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}
 
export default App; 
