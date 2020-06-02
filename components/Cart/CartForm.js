import React from 'react';
import Link from "next/link";
import {Button} from "@material-ui/core";

const CartForm = (props) => {
    return(
        <div className="cart-totals">
            <h3>Cart Totals</h3>
            <ul>
                <li>Subtotal: <span>R{props.subTotal}</span></li>
                <li>Shipping: <span>R{props.shipping}</span></li>
                <li>Tax: <span>R{props.tax}</span></li>
                <li>Total: <span>R{props.total}</span></li>
            </ul>
            <div style={{textAlign : 'center'}}>
                <Button onClick={props.onCheckout} style={{backgroundColor : '#FB6520', color : 'white'}}>Proceed to Checkout</Button>
            </div>
        </div>
    )
};

export default CartForm;