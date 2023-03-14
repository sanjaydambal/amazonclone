import React from 'react';
import "./Checkout.css"
function CheckoutItems(props) {
    return (
        <div >
           <div style={{ border: "1px solid #E7E7E7", width: "95%", display:"flex", height: "250px", margin: "25px"}}>
           <div style={{margin:"25px"}}>
            <img height="200px" src='https://ik.imagekit.io/1zytrb8ce/amazon-image/mobiles/91dLTREdG1L._AC_UL640_FMwebp_QL65_.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1676994417554' alt=''/>
           </div>
          
           <div style={{margin:"20px"}}>
           <div  style={{fontSize:"20px"}}className='textgap'> Samsung S21 (256 GB) Blue </div>
           <div style={{fontWeight:'bold'}}className='textgap'> 40,249 </div>
           <div className='textgap'> In-Stock </div>
           </div>
           </div> 
        </div>
    );
}

export default CheckoutItems;