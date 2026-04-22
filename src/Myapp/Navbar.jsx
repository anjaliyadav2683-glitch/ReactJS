import React from 'react'


function Navbar() {
  return (
     <nav className="navbar">
      <h1 className="logo">GlowBeauty</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar