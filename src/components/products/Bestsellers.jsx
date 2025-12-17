import React from 'react'
import { bestsellers } from '../../data'
import Products from './Products'

function Bestsellers() {
  return (
    <Products items={bestsellers} heading="Best Sellers"/>
  )
}

export default Bestsellers