import React from 'react';
// import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {
  
  constructor(){
    super();
    //This is State which have diff diff types 
    //Now we ,map it and return CartItem With values
    this.state={
        products:[
            {
                price:999,
                title:'Mobile Phone',
                qty:7,
                img:'',
                id : 1
            },
            {
                price:9999,
                title:'Laptops',
                qty:3,
                img:'',
                id:2
            },
            {
                price:99,
                title:'Watches',
                qty:5,
                img:'',
                id:3
            },
            {
                price:299,
                title:'Accessories',
                qty:9,
                img:'',
                id:4
            }
        ]
    }
}

handleIncreaseQuantity = (product)=>{
    const { products } = this.state;
    const index = products.indexOf(product);
    // Now change the Quantity of product[index]
    products[index].qty +=1;
    this.setState({
        products: products
    })
}

handleDecreaseQuantity = (product)=>{
    console.log('Decreasing request is called',product);
    //First we find on Which products we chamges inside the state()
    const {products} = this.state;
    const index = products.indexOf(product);
    //set VALUE OF qty on the given index product

    if(products[index].qty >1 ){ products[index].qty -= 1; }

    this.setState({
        products
    })

}
handleDelete = (id)=>{
    console.log('Item will be delete');
    const {products} = this.state;

    //filter() method used to create new Array with some operation
    const items = products.filter(item=> item.id !== id);

    //'item' is the new Array after deleting the records
    this.setState({
        products : items
        

    })
    
 }

getCartCount = ()=>{
  const {products} = this.state;
  let count = 0;

  products.forEach( (product)=>{
    count += product.qty;
  })
  return count;
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
      </div>
    );
  }
}
 
export default App; 
