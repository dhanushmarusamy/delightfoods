import React from 'react'
import './Home.css'
import A from '../images/home img.png'
import B from '../images/home3.png'
import c from '../images/home4.png'
import './Home.css'
import petha from '../images/petha.png'
import paan from '../images/paan.png'
import drypetha from '../images/drypetha.png'
import Banarasi from '../images/Banarasi.png'
import mouth from '../images/mouth.png'
import bakery from '../images/bakery.png'
import pickels from '../images/pickels.png'
import drink from '../images/drink_1.png'
import khichdi from '../images/khichdi.png'
import masalas from '../images/masalas.png'
import p1  from '../images/pic1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
// import ICON from '../images/ICON.png'
const Home = () => {
  return (
    <div>
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={A} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={B} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={c} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<div class="sample3">
  <h1>BEST SELLING PRODUCTS</h1>
  <h3>Grab our best products to brighten your day</h3>
    <div class="container">
<div class="sample4">
<div class=" item1">
   <img src={petha} width="100px" height="200px" alt=''/>

</div>
  <h5>kesar dry petha 350g</h5>
    <h5>Rs.250.00</h5>
</div>
<div class="sample5">
<div class=" item2">
   <img src={paan} width="100px" height="200px" alt=''/>
</div>
<h5>calcutta meetha paan</h5>
<h5>Rs.249.00</h5>
</div>
<div class="sample6">
<div class=" item3">
<img src={drypetha} width="100px" height="200px" alt=''/>
</div>
<h5>Dry Petha 350g</h5>
<h5>Rs.199.00</h5>
</div>
<div class="sample7">
<div class=" item4">
   <img src={Banarasi} width="100px" height="200px" alt=''/>
</div>
<h5>Banarasi Meetha Paan</h5>
<h5>Rs.299.00</h5>
</div>
    </div>
    <button>view all</button>
</div>



<div class="sample8">
  <h1>Our Collections</h1>
  <div class="container1">
<div class="sample9">
<div class="one">
  <img src={mouth} width="300px" height="400px" alt=''/>
  <div class="y">
    <h1>Mouth Freshener</h1>
  </div>
</div>
</div>
<div class="sample10">
<div class="two">
  <img src={pickels} width="300px" height="400px" alt=''/>
  <div class="y">
  <h1>pickle</h1>
</div>
</div>

</div>
<div class="sample11">
<div class="three">
  <img src={bakery} width="300px" height="400px" alt=''/>
  <div class="y">
    <h1>bakery</h1>
  </div>
</div>
</div>
<div class="sample12">
<div class="four">
  <img src={khichdi} width="300px" height="400px" alt=''/>
  <div class="y">
    <h1>khichdi</h1>
  </div>
</div>
</div>
<div class="sample13">
<div class="five">
  <img src={masalas} width="300px" height="400px" alt=''/>
  <div class="y">
    <h1>Masala</h1>
  </div>
</div>
</div>
<div class="sample14">
<div class="six">
  <img src={drink} width="300px" height="400px" alt=''/>
  <div class="y">
    <h1>drink</h1>
  </div>
</div>
</div>
  </div>



<div class="sample8">
  <h1>Trending Blogs</h1>
  <div class="container1">
<div class="sample9">
<div class="one">
  <img src={p1} width="300px" height="400px" alt=''/>
</div>
<h2>Tomato Thokku</h2>
<p>Tomato Thokku is more than just<br/> a condiment; it’s a celebration of <br/>SouthIndian culinary heritage.</p>
</div>
<div class="sample10">
<div class="two">
  <img src={p2} width="300px" height="400px" alt=''/>
</div>
<h2>Kesar Angoori Petha</h2>
<p>Few things capture the essence of <br/>India’s rich culinary heritage as<br/> perfectly as a well-crafted sweet</p>
</div>
<div class="sample11">
<div class="three">
  <img src={p3} width="300px" height="400px" alt=''/>
</div>
<h2>Calcutta Meetha Paan</h2>
<p>Few things encapsulate the essence of <br/>India’s rich culinary heritage as <br/>perfectly as a well-crafted paan. </p>
</div>
  </div>
<button class="B">view all</button>
</div>
</div>
    </div>
  )
}

export default Home