import React from "react";

//function component bydefault used inside 'props' arguments so you can passed information from One compo to other
const Navbar = (props) => {

    return(
        <div style={style.nav}>
            <div style={style.cartIconContainer}>
                <img style={style.cartIcon} src="https://cdn-icons-png.flaticon.com/512/3737/3737372.png" alt="cart" />
                <span style={style.cartCount}>3</span>
            </div>
        </div>
    )
}
//Add CSS inline making Objects
const style = {
    nav : {
        height : 70,
        backgroundColor : '#8ec4ed',
        display : 'flex',
        justifyContent : 'flex-end',
        alignItems : 'center'
    },
    cartIconContainer : {
        position:'relative'
    },
    cartIcon : {
        height :32,
        marginRight:20
        
    },
    cartCount : {
        backgroundColor:'#30424f',
        color:'white',
        borderRadius : '50%',
        padding :'4px 8px',
        position : 'absolute',
        right:0,
        top:-9
    }
}

export default Navbar;