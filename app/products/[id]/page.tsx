import React from 'react'
import { getProductById } from '@/lib/actions'
import { redirect } from 'next/navigation'
import Link from 'next/link'

type Props = {
  params: {
    id: string
  }
}

const ProductDetails = async({params :{ id } }:Props) => {
  const product = await getProductById(id)
  if(!product) redirect('/')
  return (
    <section className='product-container'>
      <div className='flex gap-28 xl:flex-row flex-col '>
        <div className=''>
          <img src={product.image} alt={product.title} className=''/>
        </div>
        <div className='flex-1 flex flex-col'>
          <div className='flex justify-between items-start gap-5 flex-wrap pb-6'>
            <div className='flex flex-col gap-3'>
              <p className='text-xl text-[#93DB2B] font-semibold'>{product.title}</p>
              <Link href={product.url} target='_blank' className='text-[#93DB2B] font-semibold text-base opacity-50'>Visit Product</Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails