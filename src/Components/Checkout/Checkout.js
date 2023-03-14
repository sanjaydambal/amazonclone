import React from 'react';
import "./Checkout.css";
import Grid from '@mui/material/Grid';
import CheckoutItems from './CheckoutItems';

function Checkout(props) {
    return (
        <div className='checkout_body'>
            <Grid container>
                <Grid item={10}>
                    <div className='checkout_container'>
                        <div style={{ fontSize: "32px", fontWeight: "500", padding: "20px 0px 0px 20px" }} >Shopping cart</div>
                        <div>
                            <CheckoutItems />
                            <CheckoutItems />
                            <CheckoutItems />
                        </div>
                    </div>
                </Grid>
                <Grid item={2}>
                    <div style={{ width: "300px", height: "200px", padding: "20px", marginTop: "20px", backgroundColor: "white" }}>
                        <div style={{ fontSize: "26px" }}> Subtotal    (3 items):<strong>1,20,750</strong> </div>
                        <div style={{ paddingTop: "25px" }}>
                            <button className='placeorder_button'>Proceed to Buy</button>
                        </div>
                    </div >
                </Grid>
            </Grid>

        </div>
    );
}

export default Checkout;
