import React from 'react'
import Product from '../component/Product'
export default function Home() {
  return (
    <div className='mid'>
      <h1>Store 🎧 </h1>
      <h2>Welcome to our store!</h2>
      <section>
        <h3 className='mid'>Products</h3>
        <Product/>
      </section>
    </div>
  )
}
