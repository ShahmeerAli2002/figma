import Brand from '@/components/Brand'
import Ceramics from '@/components/Ceramics'
import Club from '@/components/Club'
import ProductPage from '@/components/ProductPage'
import React from 'react'

const page = () => {
  return (
    <div>
      <ProductPage/>
      <Ceramics heading='You might also like'/>
      <Brand/>
      <Club/>
    </div>
  )
}

export default page
