import { Product } from '@/types'
import React from 'react'
import Link from 'next/link'

interface Props {
    product: Product
}

const ProductCard = ({product}:Props) => {
  return (
    <Link href={`/products/${product._id}`}>
        <div>
            <img src={product.image} alt={product.title}  />
        </div>
        <div className='flex flex-col gap-2'>
            <h3>{product.title}</h3>
            <div className='flex justify-between items-center'>
                <p>
                    <span>{product?.currency}</span>
                    <span>{product?.currentPrice}</span>
                </p>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard