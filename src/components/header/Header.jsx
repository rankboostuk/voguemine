import React, { useState } from 'react'
import './header.css'
const Header = () => {

    const [headerLeft,setHeaderLeft]=useState("-100%")
    const logoClick=()=>{
        if(headerLeft==="-100%"){
            setHeaderLeft("0")
        }
        else{
            setHeaderLeft("-100%")
        }
    }
  return (
<header>
    <div className='logo'>
        <h1 onClick={logoClick}>Voguemine</h1>
    </div>
    <div className='menu' style={{left:headerLeft}}>
        <ul>
            <li>Home</li>
            <li>Mens</li>
            <li>Womens</li>
            <li>Kids</li>
            <li>Accessories</li>
        </ul>
    </div>
    <div className='icons'>
        <p>Search</p>
        <p>Cart</p>
    </div>
</header>
  )
}

export default Header

