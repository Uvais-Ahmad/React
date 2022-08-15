import React from "react";
import CartItem from "./CartItem";
//This is a component which work as a container for all CartItem

const Cart = (props)=>{
    const { products} = props;
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
                onIncreaseQuantity = {props.onIncreaseQuantity}
                onDecreasingQuantity = {props.onDecreasingQuantity}
                onDeleting = { props.onDeleting }
                // func={()=>console.log('Something')}
                // jsx={<h1>testing...</h1>}           //Thsi si Function that use to send JSX file
                />
                )
            })}

            {/* {arr.map(item=>item*3)} */}
        </div>
    );
}

// export need to be use this class AnyWhere
export default Cart;