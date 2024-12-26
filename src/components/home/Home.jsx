import React from 'react'
import Categories from '../categories/Categories'
import Products from '../products/Products'

export default function Home() {
  
  return (

    <>
      <div className='About py-5'>
        <div className="container">
          <h2 className='text-center'>About</h2>
          <p className='text-center'>A marketplace page is a key component of an online platform that facilitates the buying and selling of goods, services, or digital products. This page serves as the hub where users (buyers and sellers) interact, browse products, and make transactions. Below is an outline of the typical elements, functionality, and design considerations for a marketplace page</p>
        </div>
      </div>
      <Categories />
      <Products limit = {5}/>
    </>
  )
}
