//in react we use CamlinCase of naming convention
import React from "react";

class CartItem extends React.Component{
    render (){
        return (
            <div className="cart-Item">

                <div className="left-block">
                    {/* Here we add the style CSS */}
                    <img style={style.Image} alt=""/>
                </div>

                <div className="right-block">
                    <div><h1>Tags</h1></div>
                    <div style={{color:'lightblue'}}>Price</div>
                    <div>Qnty :</div>
                    <div className="cart-item-actions"></div>
                </div>

            </div>
        );
    }
}

//Here we set style in Object and byDefault is in pixels
const style = {
    Image : {
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:'grey'
    }
}



// This class import in index file
export default CartItem;