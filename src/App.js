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
                img:'https://www.91-img.com/gallery_images_uploads/d/7/d7cf5e2b1a3a3dfcca8a8dbb524fb11a8fb1c8e8.JPG?tr=h-550,w-0,c-at_max',
                id : 1
            },
            {
                price:9999,
                title:'Laptops',
                qty:3,
                img:'https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80',
                id:2
            },
            {
                price:99,
                title:'Watches',
                qty:5,
                img:'https://cdn.luxe.digital/media/20220419083025/best-men-watches-nordgreen-native-review-luxe-digital-780x520.jpg',
                id:3
            },
            {
                price:299,
                title:'Earbuds',
                qty:9,
                img:'https://m.media-amazon.com/images/I/614bL2rQtcL._AC_SX679_.jpg',
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
        <div style={{padding :20 , fontSize :20 ,color:'darkNightBlue'}}>Total : {this.getCartTotal()}</div>
      </div>
    );
  }
}
 
export default App; 
