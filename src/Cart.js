import React from "react";
import CartItem from "./CartItem";
//This is a component which work as a container for all CartItem

class Cart extends React.Component{

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


    render(){
        const { products} = this.state;
        return(
            <div className="cart">
                
                {/* When react sees a userdefined Components with argu
                it cover all argu in a single Object Know as '"PROPS"' */}

                {/* <CartItem title={"Watch"} price={2100} qty={10} img={""} /> */}
                {/* Now we mapped to each cartItem */}

                {products.map(product=>{
                    return( 
                    <CartItem
                    product={product}
                    key = {product.id}
                    // func={()=>console.log('Something')}
                    // jsx={<h1>testing...</h1>}           //Thsi si Function that use to send JSX file
                    />
                    )
                })}

                {/* {arr.map(item=>item*3)} */}
            </div>
        );
    }
}

// export need to be use this class AnyWhere
export default Cart;