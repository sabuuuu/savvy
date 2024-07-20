import React from 'react'

import Searchbar from '@/components/Searchbar'
import HeroCarousel from '@/components/HeroCarousel'

const Home = () => {
  return (
    <>
      <section className='w-full h-screen px-6 py-24 md:px-20'>
        <div className='flex max-xl:flex-col gap-16 lg:gap-40 justify-center'>
          <div className='flex flex-col justify-center gap-y-4'>
            <p className='text-sm flex flex-row items-center gap-3 font-semibold'>Smart Shopping starts here<img src="/assets/icons/arrow-right.svg" alt="arrow" className='h-6 w-6'/></p>
            <h1 className='text-4xl font-extrabold'>Unleah the power of <span className='text-[#93DB2B]'>Savvy</span></h1>
            <p className='text-lg font-medium'>Powerful, self-serve product and growth analytics platform.</p>
            <Searchbar />
          </div>
          <HeroCarousel/>
        </div>
      </section>
      <section className='w-full h-screen px-6 py-24 md:px-20'>
        <h2>Trending</h2>
        <div className='flex flex-wrap gap-x-8 gap-y-16'>

        </div>
      </section>
    </>
  )
}

export default Home