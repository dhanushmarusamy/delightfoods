import React from 'react'
import './Header.css'
import A from '../images/ICON.png'
import { Link } from 'react-router-dom'
// import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
      <ul class="navbar-nav">
 <li class="nav-item">
             
               <Link class="nav-link active" aria-current="page" to="/">
                <img class="pt-2" src={A} width="80rem"/> 
                </Link>
                
              </li>  
</ul>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    
          <li class="nav-item dropdown">
          <a href="sweet.html" class="nav-link active ps-4 dropdown-toggle" hrefn="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SWEETS
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <Link class="dropdown-item" to="/LADDU">LADDUS</Link>
              </li>
             <li><hr class="dropdown-divider"/></li>
            <li>
              <a class="dropdown-item" href="#">REGIONAL PEDAS</a>
            </li>
            <li><hr class="dropdown-divider"/></li>
            <li>
              <a class="dropdown-item" href="#">BARFIS</a>
            </li>
             <li><hr class="dropdown-divider"/></li>
            <li>
              <a class="dropdown-item" href="#">WINTER SWEETS</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <Link class="nav-link active"  href="/LADDU">SNACKS</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="/Masala">MASALA</Link>
        </li>
            <li class="nav-item">
          <Link class="nav-link active" to="/pickle">PICKLE</Link>
        </li>
            <li class="nav-item">
          <Link class="nav-link active" to="/m">UPLOAD</Link>
        </li>
            <li class="nav-item">
          <Link class="nav-link active" to="/upload">GETDELETE</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active"  to="/register">REGISTER</Link>
        </li>
            <li class="nav-item">
          <Link class="nav-link active" to="/login">LOGIN</Link>
        </li>
              <li class="nav-item">
          <Link class="nav-link active" to="/validation">VALIDATION</Link>
        </li>
       
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
           
                       <svg class="ps-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
        <svg class="ps-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
<svg class="ms-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg>
    </div>
  
     </nav>
    </div>
  )
}

export default Header