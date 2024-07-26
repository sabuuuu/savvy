import { Product } from '@/types'
import React from 'react'
import Link from 'next/link'

interface Props {
    product: Product
}

const ProductCard = ({product}:Props) => {
  return (
    <Link href={`/products/${product._id}`} className='flex flex-col py-2 gap-2 w-72 bg-slate-50 rounded-2xl items-center'>
        <div>
            <img src={product.image} alt={product.title}  className='rounded-xl'/>
        </div>
        <div className='flex flex-col gap-1'>
            <h3 className='text-[#28321E] font-semibold'>{product.title.length > 30 ? `${product.title.substring(0, 30)}...` : product.title}</h3>
            <div className='flex justify-between items-center'>
                <p className='text-[#28321E] font-semibold'>
                    <span>{product?.currency}</span>
                    <span>{product?.currentPrice}</span>
                </p>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard