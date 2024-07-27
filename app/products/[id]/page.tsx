import React from 'react'
import { getProductById, getSimilarProducts } from '@/lib/actions'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { formatNumber } from '@/lib/utils'
import PriceInfoCard from '@/components/PriceInfoCard'
import ProductCard from '@/components/ProductCard'
import Modal from '@/components/Modal'

type Props = {
  params: {
    id: string
  }
}

const ProductDetails = async({params :{ id } }:Props) => {
  const product = await getProductById(id)
  if(!product) redirect('/')

  const similarProducts = await getSimilarProducts(id)
  return (
    <section className='flex flex-col gap-16 flex-wrap px-6 md:px-20 py-24'>
      <div className='flex gap-28 xl:flex-row flex-col '>
        <div className='flex items-center justify-center border border-[#cfdeb8] py-4 px-16 lg:py-0 rounded-3xl'>
          <img src={product.image} alt={product.title} className='w-80 h-auto rounded-2xl'/>
        </div>
        <div className='flex-1 flex flex-col'>
          <div className='flex justify-between items-start gap-5 flex-wrap pb-6'>
            <div className='flex flex-col gap-3'>
              <p className='text-xl text-[#cfdeb8] font-semibold'>{product.title}</p>
              <Link href={product.url} target='_blank' className='text-[#cfdeb8] font-semibold text-base opacity-60'>Visit Product</Link>
            </div>
            <div className='flex items-center gap-3'>
              <button className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#28321E] hover:bg-[#3b4a2a]'>
                <img src="/assets/icons/red-heart.svg" alt="idk" />
                <p className='text-sm font-semibold text-[#93DB2B]'>{product.reviewsCount}</p>
              </button>
              <button className='p-2 bg-[#28321E] rounded-lg hover:bg-[#3b4a2a]'>
                <img src="/assets/icons/bookmark.svg" alt="bookmark" />
              </button>
              <button className='p-2 bg-[#28321E] rounded-lg hover:bg-[#3b4a2a]'>
                <img src="/assets/icons/share.svg" alt="share" />
              </button>
            </div>
          </div>
          <div className='flex items-center flex-wrap gap-10 py-6 border-y border-y-[#28321E]'>
            <div className='flex flex-col gap-2'>
              <p className='text-2xl font-bold text-[#cfdeb8]'>
                {product.currency} {formatNumber(product.currentPrice)}
              </p>
              <p className='text-lg font-bold opacity-50 line-through text-[#cfdeb8]'>
                {product.currency} {formatNumber(product.originalPrice)}
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-3'>
                <button className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#28321E] hover:bg-[#3b4a2a]'>
                  <img src="/assets/icons/star.svg" alt="stars" />
                  <p className='text-sm font-semibold text-[#93DB2B]'>{product.stars || 25}</p>
                </button>
                <button className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#28321E] hover:bg-[#3b4a2a]'>
                  <img src="/assets/icons/comment.svg" alt="comment" />
                  <p className='text-sm font-semibold text-[#93DB2B]'>{product.reviewsCount}</p>
                </button>
              </div>
              <p className='text-sm font-semibold opacity-50 text-[#cfdeb8]'>
                <span className='text-[#93DB2B]'>93% </span> 
                 of customers recommend this product
              </p>
            </div>
          </div>
          <div className='my-7 flex flex-col gap-4'>
            <div className='flex gap-4 flex-wrap'>
              <PriceInfoCard
                title='Current Price'
                iconSrc='/assets/icons/price-tag.svg'
                value={`${product.currency} ${formatNumber(product.currentPrice)}`} 
              />
              <PriceInfoCard
                title='Average Price'
                iconSrc='/assets/icons/chart.svg'
                value={`${product.currency} ${formatNumber(product.averagePrice)}`} 
              />
              <PriceInfoCard
                title='Highest Price'
                iconSrc='/assets/icons/arrow-up.svg'
                value={`${product.currency} ${formatNumber(product.highestPrice)}`}  
              />
              <PriceInfoCard
                title='Lowest Price'
                iconSrc='/assets/icons/arrow-down.svg'
                value={`${product.currency} ${formatNumber(product.lowestPrice)}`} 
              />
            </div>
          </div>
          <Modal />
        </div>
      </div>
      <div className='flex flex-col gap-12 '>
        <div className='flex flex-col gap-4'>
          <h3 className='text-xl text-[#cfdeb8] font-semibold'>Product Description</h3>
          <div className='flex flex-col gap-4 text-[#e6eed9]'>
            {product?.description?.split('\n')}
          </div>
        </div>
        <Link href={product.url} target='_blank' className='px-6 py-3 bg-[#28321E] rounded-xl hover:bg-[#3b4a2a] text-[#93DB2B] flex lg:w-1/3 md:w-1/2 w-full items-center justify-center font-bold self-center'>
          <img src="/assets/icons/bag.svg" alt="bag" />
          buy now
        </Link>
      </div>
      {similarProducts && similarProducts?.length > 0 && (
        <div className='flex flex-col py-12 gap-2 w-full'>
          <h3 className='text-xl text-[#cfdeb8] font-semibold'>Similar Products</h3>
          <div className='flex flex-wrap gap-4 mt-6 w-full'>
            {similarProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductDetails