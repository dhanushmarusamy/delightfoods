import React from 'react'
import './Pickle.css'
import pickles from '../images/pickles.png'
import pi1 from '../images/pi1.png'
import pi2 from '../images/pi2.png'
import pi3 from '../images/pi3.png'
import pi4 from '../images/pi4.png'
import pi5 from '../images/pi5.png'
import pi6 from '../images/pi6.png'
import pi7 from '../images/pi7.png'
import pi8 from '../images/pi8.png'
const Pickle = () => {
  return (
    <div>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={pickles} class="d-block w-100" alt="..."/>
  </div>
</div>
     </div>
         <div class="container pt-4">
  <div class="row">
    <div class="col">
      <img src={pi1} width="250px" height="300px" alt=''/>
      <div>
        <h6 class="l">Mylapore Iyer's<br/> Tomato Thokku</h6>
<h5 class="s">Rs:199</h5>
      </div>
    </div>
    <div class="col">
        <img src={pi2} width="250px" height="300px" alt=''/>
         <div>
        <h6 class="l">Mylapore Iyer's <br/>Vathakozhambu Thokku</h6>
<h5 class="s">Rs:209</h5>
      </div>
    </div>
    <div class="col">
        <img src={pi3} width="250px" height="300px" alt=''/>
         <div>
        <h6 class="l">Mango Thokku</h6>
<h5 class="s">Rs:209</h5>
      </div>
    </div>
     <div class="col">
        <img src={pi4} width="250px" height="300px" alt=''/>
         <div>
        <h6 class="l">Brinjal Thokku 500g</h6>
<h5 class="s">Rs:199</h5>
      </div>
    </div>
  </div>
</div>
     <div class="container pt-4">
  <div class="row">
    <div class="col">
      <img src={pi5} width="250px" height="300px" alt=''/>
       <div>
        <h6 class="m">Bharwan Lal Mirch<br/> Ka Achaar 350g</h6>
<h5 class="s">Rs:299</h5>
      </div>
    </div>
    <div class="col">
        <img src={pi6} width="250px" height="300px" alt=''/>
         <div>
        <h6 class="l">Pavakkai Thokku 500g </h6>
<h5 class="s">Rs:299</h5>
      </div>
    </div>
    <div class="col">
        <img src={pi7} width="250px" height="300px" alt=''/>
         <div>
        <h6 class="l">Amla Murabba 350g</h6>
<h5 class="s">Rs:149</h5>
      </div>
    </div>
     <div class="col">
        <img src={pi8} width="250px" height="300px" alt=''/>
         <div>
        <h6 class="l">Kothamalli Thokku 500g</h6>
<h5 class="s">Rs:199</h5>
      </div>
    </div>
  </div>
</div>
    </div>
    
    
  )
}

export default Pickle