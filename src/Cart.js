import React from "react";
import "./Cart.css";

const Cart = () => (
   <>
   <header className='navbar'>
        <div className='navbar__title navbar__item'>Myntra</div>
        <p style={{textAlign:'right', paddingRight:'30px', fontSize:'14px'}}>100 % Secure Payments</p>
    </header>
<br/>
<br/>
    <div style={{textAlign:'center'}}>BAG -------- ADDRESS-------- PAYMENT</div>
    <br/>
    <hr/>


    <div className='row' >



    <div style={{ width:'700px', borderRadius:'2px'}} className='column'>


    <div className='offer' style={{border:'1px solid', borderRadius:'5px',padding:'10px', marginLeft:'60px'}}>
<p style={{fontSize:'12px', }}>Deliver to: Ankita Mandal</p>


<p style={{fontSize:'12px'}}>183 chuanpur ghoshpara berhampore Murshidabad</p>
</div>
<br/>

<div className='offer' style={{border:'1px solid', borderRadius:'5px', padding:'20px', marginLeft:'60px'}}>

<h3 style={{fontSize:'20px'}}>Available Offers</h3>
<p>5 % unlimited cashback on all flipkart orders and axis bank</p>
<a style={{color:'red'}} href="/">Show More</a>


</div>
<br/>

<div className='offer' style={{border:'1px solid', borderRadius:'5px', padding:'20px', marginLeft:'60px'}}>


<p>Shop for Rs.234 more and avail free discounts</p>



</div>
<br/>

<div className='offer' style={{padding:'70px'}}>
    


<p style={{fontSize:'20px'}}>2/2 items selected</p>

<hr/>

<div style={{ padding:'10px', }}>
<div className='row'>

    <div className='column'>
    <img style={{height:'100px', width:'100px', textAlign:'center'}} src="https://picsum.photos/500/300/?image=10" alt="Cinque Terre" className='picname'/>

    </div>
    <div className='column'>
        <p style={{fontSize:'20px'}}>Blue rutches top</p>
        <hr/>
        <p style={{fontSize:'14px'}}>Blue Rutched top with turquoise detailing</p>
    </div>

</div>
<div className='row'>

    <div className='column'>
    <img style={{height:'100px', width:'100px', textAlign:'center'}} src="https://picsum.photos/500/300/?image=10" alt="Cinque Terre" className='picname'/>

    </div>
    <div className='column'>
        <p style={{fontSize:'20px'}}>Blue rutches top</p>
        <hr/>
        <p style={{fontSize:'14px'}}>Blue Rutched top with turquoise detailing</p>
    </div>

</div>

</div>

</div>

</div>
<div style={{ width:'700px', textAlign:'left', paddingLeft:'60px'}} className='column'>

        <p style={{fontSize:'20px'}}>Deliver to: Ankita Mandal</p>

        
        <p>183 chuanpur ghoshpara berhampore Murshidabad</p>

<hr></hr>
<br/>
<br/>
<br/>

<h3>Coupons</h3>
    <div className='row'>

    <div className='column'>
        <p>Applying Coupons</p>
    </div>
    <div className='column'>
        <button style={{backgroundColor:'pink', padding:'3px', width:'100px'}}>Apply</button>
    </div>

    </div>

    <hr/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className='row'>
    
<table style={{width:"100%", padding:'30px'}}>
  <tr>
    <td>Total MRP</td>
    <td>Rs. 350</td>
    
  </tr>
  <tr>
    <td>Discount on MRP</td>
    <td>Rs. 50</td>
    
  </tr>
  <tr>
    <td>Coupon Discount</td>
    <td>Rs. 35</td>
    
  </tr>
  <tr>
    <td>Convinience Fee</td>
    <td>Rs. 30</td>
    
  </tr>
  <br/>
  <hr/>
  <tr>
    <td style={{color:'red'}}>TOTAL</td>
    <td>Rs. 400</td>
    
  </tr>
</table>

<br/>
<br/>
<br/>
<button style={{backgroundColor:'red', marginRight:'50px', margin:'20px', color:'white', height:'50px', width:'400px'}}>Place Order</button>

</div>

    </div>
    

    </div>

    

    

   </>
   
);
export default Cart;