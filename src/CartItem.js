//in react we use CamlinCase of naming convention
import React from "react";

//This conver from class component to Functional component so bydefault props argu used
const CartItem = (props) =>{
    const { title , price , qty , img} =props.product;
    const {
        product,
        onIncreaseQuantity,
        onDecreasingQuantity,
        onDeleting
    } = props;
    return (
        <div className="cart-Item">                             
            <div className="left-block">
                {/* Here we add the style CSS */}
                {/* src={this.state.img} */}
                <img style={style.Image} src={img}  alt=""/>
            </div>

            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'lightblue'}}>{price}</div>
                <div>{qty}</div>
                <div className="cart-item-actions">
                    {/* This is three icon will be added in 'img' Tag */}

                    <img 
                    alt="increase" 
                    src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" 
                    className="action-icon"
                    // onClick= {this.increaseQuantity}
                    // Now we have function in props used to increase and sent from CART
                    onClick = {()=>onIncreaseQuantity(product)}
                    />  
                    <img 
                    alt="decrease" 
                    src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" 
                    className="action-icon" 
                    // onClick={this.decreaseQuantity}
                    //Each CartItem Hold the property trto decre in props argu
                    onClick={()=>onDecreasingQuantity(product)}
                    />
                    <img 
                    alt="delete" 
                    src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" 
                    className="action-icon"
                    onClick={()=> onDeleting(product.id)}
                    />  
                </div>
            </div>
        </div>
    );
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