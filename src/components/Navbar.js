import React from 'react'
import {  Link } from "react-router-dom";
import { FaUserAlt,FaSearch, FaUserCheck } from 'react-icons/fa';
import {BsFillCartPlusFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
const items = useSelector((state) => state.cart);
const { loginWithRedirect } = useAuth0();
const { logout } = useAuth0();
const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
    <div className="hero_area">
    
     <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link className="navbar-brand" to="/">
            <span>
              Timups
            </span>
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""> </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/watches"> Watches </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"> About </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
            <div className="user_option-box">

            {
              isAuthenticated ? 
              <div className='user-image'>
              <a onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>     
               <img src= {user.picture} alt={user.name} />
              </a>
              </div>
              :
            <div className='user-margin'>
              <a href="" onClick={() => loginWithRedirect()} >
                  <i className="fa fa-user" aria-hidden="true"><FaUserAlt /></i> 
              </a>
              </div>
            }

              

              
<div className='user-margin'> 
              <Link to="/cart">
                <i className="fa fa-cart-plus" aria-hidden="true"><BsFillCartPlusFill />({items.length})</i>
              </Link>
              </div>
              <div className='user-margin'> 
              <Link to="/search">
                <i className="fa fa-search" aria-hidden="true"><FaSearch /></i>
              </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header> 
    
  </div>
    </>
  )
} 
export default Navbar