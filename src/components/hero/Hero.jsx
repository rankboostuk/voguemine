import React, { useEffect, useState } from 'react'
import './hero.css'
const Hero = () => {
    const [imgIndex,setimgindex]=useState(0)
    const images=["https://res.cloudinary.com/dqh6bd766/image/upload/v1738065116/seug5pifw2hbrjvpdvy3.jpg","https://res.cloudinary.com/dqh6bd766/image/upload/v1738065150/l9mjd7r7jehwqulfnc0u.jpg","https://res.cloudinary.com/dqh6bd766/image/upload/v1738065124/e7r9z0ppjbnqtzr0h76f.jpg"]
  const prevClick=()=>{
    if(imgIndex==0){
        setimgindex(2)
    }
    else{
        setimgindex(imgIndex-1)

    }
  }
  const nextClick=()=>{
    if(imgIndex==2){
        setimgindex(0)
    }
    else{
        setimgindex(imgIndex+1)

    }
  }





    return (
    <div className='hero'>
      <img src={images[imgIndex]} alt="" />
      <button onClick={prevClick}>Button1</button>
      <button onClick={nextClick}>Button2</button>

    </div>
  )
}

export default Hero
