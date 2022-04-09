import React from "react";
import "./Mainpage.css";

const MainPage = () => (
   <>
   <header className='navbar'>
        <div className='navbar__title navbar__item'>Myntra</div>
        <div className='navbar__item'>Home</div>
        <div className='navbar__item'>Women</div>
        <div className='navbar__item'>Kids</div>
        <div className='navbar__item'>Men</div> 
        <div className='navbar__item'>Home</div> 
        <div className='navbar__item'>Living</div> 
        <div className='navbar__item'>Cosmo</div>     
        <div className='input-here'><input></input><button><i class="fa fa-search"></i></button></div>   
    </header>

    <ul  class="breadcrumb">
  <li><a style={{color:'rebeccapurple'}} href="#">Home</a></li>
  <li><a style={{color:'rebeccapurple'}} href="#">Women</a></li>
  <li><a style={{color:'rebeccapurple'}} href="#">Pants</a></li>
  <li>Top</li>

  
  
</ul>


<div className="row" style={{width:'80%', textAlign:'center'}}>
  <div className="column" style={{backgroundColor:'white'}}>
   
    
<div className="row" style={{width:'80%', textAlign:'center'}}>
  <div className="column" style={{backgroundColor:'white'}}>
    <a target="_blank" href="img_5terre.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Cinque Terre" className='picname'/>

  </a>
  <a target="_blank" href="img_5terre.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Cinque Terre" className='picname'/>
  </a>
  </div>
  <div className="column" style={{backgroundColor:'white'}}>
    
    <a target="_blank" href="img_5terre.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Cinque Terre" className='picname'/>
  </a>
  <a target="_blank" href="img_5terre.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Cinque Terre" className='picname'/>
  </a>
  </div>
</div>
    
  </div>
  <div className="column" style={{backgroundColor:'white'}}>
    <h2 style={{float:'left'}}>Seraaa</h2>
    <br/>
    
    
    <p style={{float:'left'}}>Pink & Multicoloured Floral Printed Puff Sleeves Chiffon Blouson Crop Top</p>
    

    <p style={{float:'left'}}><span style={{fontSize:'30px'}}>Rs 570</span> <strike>1200</strike> (30% off)</p>

    <p style={{float:'left', textAlign:'left'}}>Pink & Multicoloured Floral Printed Puff Sleeves Chiffon Blouson Crop TopPink & Multicoloured Floral Printed Puff Sleeves Chiffon Blouson Crop Top Puff Sleeves Chiffon Blouson Crop TopPink & Multico</p>

    

    <h5 style={{float:'left', border:'1px solid', borderColor:'grey',borderRadius:'5px',padding:'4px'}}><span style={{color:'red'}}>4.3 ⭐ ratings   </span> | Myntras choice by Myntra   <br/></h5>
    <br/>
    <p style={{float:'left', fontSize:'26px'}}>Choose Size <button style={{borderRadius:'50px', width:'50px', borderColor:'grey', margin:'10px'}}>S</button>
    <button style={{borderRadius:'50px', width:'50px', borderColor:'grey', margin:'10px'}}>M</button>
    <button style={{borderRadius:'50px', width:'50px', borderColor:'grey', margin:'10px'}}>L</button>
    <button style={{borderRadius:'50px', width:'50px', borderColor:'grey', margin:'10px'}}>XL</button>
    <button style={{borderRadius:'50px', width:'50px', borderColor:'grey', margin:'10px'}}>XS</button></p>

    
    <br/>
    <br/>
    <button style={{width:'350px', height:'60px', backgroundColor:'pink', border:'2px'}}>Add to Bag</button><br/><button style={{width:'350px', height:'60px',  backgroundColor:'white', border:'1px solid'}}>Wishlist</button>
    
    
  </div>
  
</div>


<div style={{paddingLeft:'30px'}}>

    <p style={{fontSize:'40px'}}>Delivery Options</p>
    <p style={{fontSize:'18px'}}><li>Cash on Delivery Available At you spot</li></p>
    <p style={{fontSize:'18px'}}><li>Fast Delivery</li></p>
    <p style={{fontSize:'18px'}}><li>Contactless Delivery</li></p>
    <hr></hr>
    <p style={{fontSize:'40px'}}>Fabric Story</p>
    <p style={{fontSize:'18px'}}>Polyester: Polyester is the "wonder fiber" of the 20th century, and makes for comfy durable garments with excellent elasticity. It?s resistance to water-based stains and quick drying properties make it ideal for outdoor clothing.
    Polyester: Polyester is the "wonder fiber" of the 20th century, and makes for comfy durable garments with excellent elasticity. It?s resistance to water-based stains and quick drying properties make it ideal for outdoor clothing.
    Polyester: Polyester is the "wonder fiber" of the 20th century, and makes for comfy durable garments with excellent elasticity. It?s resistance to water-based stains and quick drying properties make it ideal for outdoor clothing.</p>
    
    <hr></hr>
</div>


<div style={{paddingLeft:'30px'}}>

<p style={{fontSize:'30px'}}>Size</p>
    <p style={{fontSize:'18px'}}>Fit to body</p>
    <hr></hr>
</div>



<div style={{paddingLeft:'30px'}}>

<p style={{fontSize:'30px'}}>Specifications</p>
    <div className="row">

        <div className="column">Short Sleeves</div>
        <div className="column">high neck line</div>
    </div>
    <div className="row">

        <div className="column">Blousom</div>
        <div className="column">floral</div>
    </div>
    <div className="row">

        <div className="column">bell bottemed</div>
        <div className="column">puffed sleeves</div>
    </div>

    <hr></hr>
</div>

<div style={{padding:'30px'}}>

<p style={{fontSize:'40px'}}>Reviews</p>
<br/>
<p style={{fontSize:'18px'}}>Diksha Sonapatra  ⭐⭐⭐⭐⭐</p>
<p style={{fontSize:'14px'}}>Lovely product</p>

<br/>
<p style={{fontSize:'18px'}}>Ritu Sonapatra  ⭐⭐⭐</p>
<p style={{fontSize:'14px'}}>Lovely product nice thnk you</p>


</div>


<hr style={{color:'rebeccapurple'}}/>
<div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_forest.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Forest" width="600" height="400"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_lights.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Northern Lights" width="600" height="400"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_mountains.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Mountains" width="600" height="400"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_forest.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Forest" width="600" height="400"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_lights.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Northern Lights" width="600" height="400"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_mountains.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Mountains" width="600" height="400"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_forest.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Forest" width="600" height="400"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_lights.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Northern Lights" width="600" height="400"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_mountains.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Mountains" width="600" height="400"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_5terre.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Cinque Terre" width="600" height="400"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<div class="gallery">
  <a target="_blank" href="img_forest.jpg">
    <img src="https://picsum.photos/500/300/?image=10" alt="Forest" width="600" height="400"/>
  </a>
  <div class="desc">Add a description of the image here</div>
</div>

<footer>
  <p>Author: Myntras<br/>
  <a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>
   </>
   
);
export default MainPage;