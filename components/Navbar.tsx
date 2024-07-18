import React from 'react'
import Link from 'next/link'

const navIcons = [
  {src:'/assets/icons/search.svg' , alt:"search"},
  {src:'/assets/icons/black-heart.svg' , alt:"heart"},
  {src:'/assets/icons/user.svg' , alt:"user"}
]

const Navbar = () => {
  return (
    <header className='w-full bg-[#28321E]'>
        <nav className='flex justify-between items-center px-8 lg:px-16 md:px-20 py-5'>
          <Link href='/' className='flex items-center gap-2 text-[#93DB2B] font-extrabold text-xl'>
            <img src='/assets/logo.png' alt="money money" className='h-8 w-8' />
            Savvy
          </Link>
          <div className='flex items-center gap-5'>
            {navIcons.map((icon,index)=>{
              return <img key={index} src={icon.src} alt={icon.alt}/>
            })}
          </div>
        </nav>
    </header>
  )
}

export default Navbar