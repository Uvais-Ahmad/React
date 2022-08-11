//in react we use CamlinCase of naming convention
import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        // Object used to initialize value in item
        this.state={
            title:'Phone',
            price : 9999,
            qty:1,
            img:'',
            tempNum:1
        }
        //this is also soln of this problem
        // this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    
    //Use Error function to solve this type of error
    increaseQuantity = () => {
        // This is pbject element to set value use .setState() function gives value in object
        this.setState({
            qty : this.state.qty + 1
        })


        //This is definning batching ,i.e. When multiple times
        //setState() function is called it is baching used
        this.setState(
            prevState => {
                return {
                tempNum: prevState.tempNum + 2
                };
            },()=>{ console.log(this.state.tempNum)}
        );
        this.setState(
            prevState => {
                return {
                tempNum: prevState.tempNum + 3
                };
            },()=>{ console.log(this.state.tempNum)}
        );



    }
    decreaseQuantity = () =>{
        if(this.state.qty >1){

                //This is First method to set State
            // this.setState({
            //     qty : this.state.qty - 1
            // })

                //This is 2nd Method to setState()
            this.setState((prevState)=>{
                return {
                    qty : prevState.qty -1
                }
            } , ()=>{
                console.log("Successfull added Quantity ",this.state);
            });

            //we can write many .setState() function 
            //No matter how many you write so, only last
            // setState() function is  called
            //because it is async() call function
        }
    }
    
    render (){

        // Used for short initialize object fromthe constructor
        const { title , price , qty , img} = this.state;
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
                        onClick= {this.increaseQuantity}
                        />

                        <img 
                        alt="decrease" 
                        src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" 
                        className="action-icon" 
                        onClick={this.decreaseQuantity}
                        />

                        <img 
                        alt="delete" 
                        src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg" 
                        className="action-icon"
                        />  

                    </div>
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