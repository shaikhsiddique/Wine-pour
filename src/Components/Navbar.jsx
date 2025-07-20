import React from 'react'

function Navbar() {
  return (
    <div className='nav w-full flex justify-between items-center py-4 p-1 fixed z-30'>
      <div className="left flex gap-2 items-center"> 
        <img src="./logo.png" alt="" />
        <h3 className='nax-text text-3xl text-white pt-2'>Velvet Pour</h3>
      </div>
      <div className="nav-links right flex items-center gap-11 text-white text-[16px] ">
        <h4 className=' cursor-pointer'>Cocktails</h4>
        <h4 className=' cursor-pointer'>About Us</h4>
        <h4 className=' cursor-pointer'>The Art</h4>
        <h4 className=' cursor-pointer'>Contact</h4>
      </div>

      </div>
  )
}

export default Navbar