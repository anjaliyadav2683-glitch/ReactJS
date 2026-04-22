import React from 'react'

function Product() {
  const items = [
    { id: 1, name: "Lipstick", price: "₹499" },
    { id: 2, name: "Foundation", price: "₹999" },
    { id: 3, name: "Face Cream", price: "₹699" }
  ];

  return (
    <div className="page">
      <h2>Our Products </h2>
      <div className="products">
        {items.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product