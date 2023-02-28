import React from 'react'
import Filter from '../component/home/Filter'
import Products from '../component/home/Products'

export default function Home() {
  return (
    <div className='product_list'>
        <Filter />
        <Products />
    </div>
  )
}
