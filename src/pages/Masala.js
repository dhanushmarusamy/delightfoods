import React from 'react'
import './masala.css'
import masala from '../images/masalas.png'
import m1 from '../images/m1.png'
import m2 from '../images/m2.png'
import m3 from '../images/m3.png'
import m4 from '../images/m4.png'
import m5 from '../images/m5.png'
import m6 from '../images/m6.png'
import m7 from '../images/m7.png'
import m8 from '../images/m8.png'
const Masala = () => {
  return (
    <div>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={masala} class="d-block w-100" alt="..."/>
  </div>
</div>
     </div>


         <div class="container pt-4">
  <div class="row">
    <div class="col">
      <img src={m1} width="250px" height="300px" alt=''/>
      <div>
        <h6 class="l">Rajma Masala</h6>
<h5 class="s">Rs:199</h5>
      </div>
    </div>
    <div class="col">
        <img src={m2} width="250px" height="300px" alt=''/>
         <div>
        <h6 class="l">Mughlai Chicken Masala</h6>
<h5 class="s">Rs:209</h5>
      </div>
    </div>
    <div class="col">
        <img src={m3} width="250px" height="300px" alt=''/>
         <div>
        <h6 class="l">Shahi Paneer Masala</h6>
<h5 class="s">Rs:209</h5>
      </div>
    </div>
     <div class="col">
        <img src={m4} width="250px" height="300px" alt=''/>
         <div>
        <h6 class="l">Shahi Biryani/ Pulav Masala</h6>
<h5 class="s">Rs:199</h5>
      </div>
    </div>
  </div>
</div>


   <div class="container pt-4">
  <div class="row">
    <div class="col">
      <img src={m5} width="250px" height="300px" alt=''/>
       <div>
        <h6 class="m">Mutton Rogan Josh Masala</h6>
<h5 class="s">Rs:299</h5>
      </div>
    </div>
    <div class="col">
        <img src={m6} width="250px" height="300px" alt=''/>
         <div>
        <h6 class="l">Shahi Garam Masala 100g</h6>
<h5 class="s">Rs:299</h5>
      </div>
    </div>
    <div class="col">
        <img src={m7} width="250px" height="300px" alt=''/>
         <div>
        <h6 class="l">Amritsari Chaat & Fruit Masala</h6>
<h5 class="s">Rs:149</h5>
      </div>
    </div>
     <div class="col">
        <img src={m8} width="250px" height="300px" alt=''/>
         <div>
        <h6 class="l">Dal Makhani Masala</h6>
<h5 class="s">Rs:199</h5>
      </div>
    </div>
  </div>
</div>
    
    </div>
    
  )
}

export default Masala