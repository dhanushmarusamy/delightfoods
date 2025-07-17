import React from 'react'
import './Sweet.css'
import sweets from '../images/sweets.png'
import p4 from '../images/p41.png'
import p5 from '../images/p51.png'
import p6 from '../images/p61.png'
import p7 from '../images/p71.png'
import p8 from '../images/p81.png'
import p9 from '../images/p91.png'
import p10 from '../images/p101.png'
import p11 from '../images/p111.png'
const Sweet = () => {
  return (
    <div>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={sweets} class="d-block w-100" alt="..."/>
  </div>
</div>
     </div>

         <div class="container pt-4">
  <div class="row">
    <div class="col">
      <img src={p4} width="200px" height="300px" alt=''/>
      <div>
        <h6>Candy
Palm Candy Tal Mishri<br/> - 350Gram</h6>
<h5 class="s">Rs:299</h5>
      </div>
    </div>
    <div class="col">
        <img src={p5} width="200px" height="300px" alt=''/>
         <div>
        <h6 class="l">Kaju Katli</h6>
<h5 class="s">Rs:299</h5>
      </div>
    </div>
    <div class="col">
        <img src={p6} width="200px" height="300px" alt=''/>
         <div>
        <h6>Khus Angoori Petha 350g</h6>
<h5 class="s">Rs:299</h5>
      </div>
    </div>
     <div class="col">
        <img src={p7} width="200px" height="300px" alt=''/>
         <div>
        <h6>Sugar Free Angoori Petha 350g</h6>
<h5 class="s">Rs:299</h5>
      </div>
    </div>
  </div>
</div>


     <div class="container pt-4 ">
  <div class="row">
    <div class="col">
      <img src={p8} width="200px" height="300px" alt=''/>
       <div>
        <h6 class="m">Dodha Barfi</h6>
<h5 class="s">Rs:299</h5>
      </div>
    </div>
    <div class="col">
        <img src={p9} width="200px" height="300px" alt=''/>
         <div>
        <h6>Moti Choor Ladoo 400g</h6>
<h5 class="s">Rs:299</h5>
      </div>
    </div>
    <div class="col">
        <img src={p10} width="200px" height="300px" alt=''/>
         <div>
        <h6>Jodhpuri Ladoo 400g</h6>
<h5 class="s">Rs:299</h5>
      </div>
    </div>
     <div class="col">
        <img src={p11} width="200px" height="300px"alt=''/>
         <div>
        <h6>Dry Fruit Besan Ladoo</h6>
<h5 class="s">Rs:299</h5>
      </div>
    </div>
  </div>
</div>
    
    </div>
    
  )
}

export default Sweet