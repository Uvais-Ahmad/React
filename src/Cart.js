import React from "react";
import CartItem from "./CartItem";
//This is a component which work as a container for all CartItem

class Cart extends React.Component{
    render(){
        const arr= [1,2,3,4,5]
        return(
            <div className="cart">

                {/* When react sees a userdefined Components with argu
                it cover all argu in a single Object Know as '"PROPS"' */}
                <CartItem title={"Watch"} price={2100} qty={10} img={""} />
                <CartItem />
                <CartItem />


                {arr.map(item=>item*3)}
            </div>
        );
    }
}

// export need to be use this class AnyWhere
export default Cart;